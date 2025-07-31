import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Circle from 'ol/geom/Circle';
import LineString from 'ol/geom/LineString';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';
import { getDistance } from 'ol/sphere';

const TARGET_COORD = [112.739283, -7.946796]; 
const TARGET_AREA = 337.8; 
const TARGET_RADIUS = Math.sqrt(TARGET_AREA * 10000 / Math.PI); 

const MapWithUserLocation = () => {
    const mapRef = useRef();
    const targetRef = useRef();
    const watchIdRef = useRef();
    const [distance, setDistance] = useState(null);
    const [accuracy, setAccuracy] = useState(null);
    const [locationStatus, setLocationStatus] = useState('Getting location...');
    const [userCoords, setUserCoords] = useState(null);

    const handleLocationError = (error) => {
        let errorMessage = '';
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "❌ Akses lokasi ditolak. Mohon izinkan akses lokasi di browser.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "❌ Informasi lokasi tidak tersedia.";
                break;
            case error.TIMEOUT:
                errorMessage = "⏰ Timeout - coba refresh halaman.";
                break;
            default:
                errorMessage = "❌ Error tidak diketahui dalam mengakses lokasi.";
                break;
        }
        setLocationStatus(errorMessage);
        console.error("Geolocation error:", error);
    };

    const updateUserLocation = (position) => {
        const { latitude, longitude, accuracy: acc } = position.coords;
        const userLonLat = [longitude, latitude];
        const userPoint = fromLonLat(userLonLat);

        setUserCoords(userLonLat);
        setAccuracy(acc);
        setLocationStatus('✅ Lokasi berhasil didapat');

        if (mapRef.current) {
            const vectorSource = mapRef.current.getLayers().getArray()[1].getSource();

            const features = vectorSource.getFeatures();
            const userFeatures = features.filter(f =>
                f.get('type') === 'user' ||
                f.get('type') === 'accuracy' ||
                f.get('type') === 'route'
            );
            userFeatures.forEach(f => vectorSource.removeFeature(f));

            const userFeature = new Feature({
                geometry: new Point(userPoint),
                type: 'user'
            });

            userFeature.setStyle(
                new Style({
                    image: new CircleStyle({
                        radius: 8,
                        fill: new Fill({ color: 'red' }),
                        stroke: new Stroke({ color: 'white', width: 3 }),
                    }),
                })
            );

            let accuracyCircle = null;
            if (acc < 1000) {
                accuracyCircle = new Feature({
                    geometry: new Circle(userPoint, acc),
                    type: 'accuracy'
                });

                accuracyCircle.setStyle(
                    new Style({
                        fill: new Fill({ color: 'rgba(255, 0, 0, 0.1)' }),
                        stroke: new Stroke({ color: 'red', width: 1, lineDash: [5, 5] }),
                    })
                );
            }

            const targetPoint = fromLonLat(TARGET_COORD);
            const route = new Feature({
                geometry: new LineString([userPoint, targetPoint]),
                type: 'route'
            });

            route.setStyle(
                new Style({
                    stroke: new Stroke({
                        color: '#007bff',
                        width: 3,
                        lineDash: [8, 4],
                    }),
                })
            );

            const newFeatures = [userFeature, route];
            if (accuracyCircle) newFeatures.push(accuracyCircle);
            vectorSource.addFeatures(newFeatures);

            const jarak = getDistance(userLonLat, TARGET_COORD);
            setDistance(jarak);

            mapRef.current.getView().fit(vectorSource.getExtent(), {
                padding: [80, 80, 80, 80],
                duration: 1000,
                maxZoom: 17,
            });
        }
    };

    const requestLocation = () => {
        setLocationStatus('🔄 Mencari lokasi...');

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                updateUserLocation,
                handleLocationError,
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 60000, 
                }
            );

            watchIdRef.current = navigator.geolocation.watchPosition(
                updateUserLocation,
                handleLocationError,
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 30000, 
                }
            );
        } else {
            setLocationStatus('❌ Browser tidak mendukung Geolocation API');
        }
    };

    useEffect(() => {
        const targetPoint = fromLonLat(TARGET_COORD);

        const targetArea = new Feature({
            geometry: new Circle(targetPoint, TARGET_RADIUS),
            type: 'target'
        });

        targetArea.setStyle(
            new Style({
                fill: new Fill({ color: 'rgba(0, 123, 255, 0.2)' }),
                stroke: new Stroke({ color: 'blue', width: 2 }),
            })
        );

        const targetMarker = new Feature({
            geometry: new Point(targetPoint),
            type: 'target-marker'
        });

        targetMarker.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 8,
                    fill: new Fill({ color: 'blue' }),
                    stroke: new Stroke({ color: 'white', width: 3 }),
                }),
            })
        );

        const vectorSource = new VectorSource({
            features: [targetArea, targetMarker],
        });

        const vectorLayer = new VectorLayer({ source: vectorSource });

        const map = new Map({
            target: targetRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                vectorLayer,
            ],
            view: new View({
                center: targetPoint,
                zoom: 16,
            }),
        });

        mapRef.current = map;

        requestLocation();

        return () => {
            if (watchIdRef.current) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
            map.setTarget(null);
        };
    }, []);

    return (
        <div className="pt-15 px-10">
            {!userCoords && (
                <button
                    onClick={requestLocation}
                    className=""
                >
                </button>
            )}
            <div
                ref={targetRef}
                style={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e5e7eb',
                }}
            />

            {distance && userCoords && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">
                        <strong>📍 Koordinat Anda:</strong> {userCoords[1].toFixed(6)}, {userCoords[0].toFixed(6)}
                        <br />
                        <strong>🧭 Jarak ke Pusat Desa Sukolilo:</strong> {(distance / 1000).toFixed(2)} km ({Math.round(distance)} meter)
                        <br />
                        <strong>🎯 Akurasi Lokasi:</strong> ±{Math.round(accuracy)} meter
                        <br />
                        {distance <= TARGET_RADIUS && (
                            <span className="text-green-600 font-semibold">Anda berada di dalam wilayah Desa Sukolilo!</span>
                        )}
                        {distance > TARGET_RADIUS && distance <= TARGET_RADIUS * 1.5 && (
                            <span className="text-orange-600 font-semibold">Anda dekat dengan wilayah Desa Sukolilo</span>
                        )}
                        {distance > TARGET_RADIUS * 1.5 && (
                            <span className="text-red-600 font-semibold">Anda berada di luar wilayah Desa Sukolilo</span>
                        )}
                    </p>
                </div>
            )}
        </div>
    );
};

export default MapWithUserLocation;