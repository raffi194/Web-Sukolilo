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

const TARGET_COORD = [112.739283, -7.946796]; // Sukolilo (baru)
const TARGET_RADIUS = 250; // Radius area desa

const MapWithUserLocation = () => {
    const mapRef = useRef();
    const targetRef = useRef();
    const [distance, setDistance] = useState(null);
    const [accuracy, setAccuracy] = useState(null);

    useEffect(() => {
        const targetPoint = fromLonLat(TARGET_COORD);

        // 🎯 Area sekitar desa Sukolilo
        const targetArea = new Feature({
            geometry: new Circle(targetPoint, TARGET_RADIUS),
        });

        targetArea.setStyle(
            new Style({
                fill: new Fill({ color: 'rgba(0, 123, 255, 0.2)' }),
                stroke: new Stroke({ color: 'blue', width: 2 }),
            })
        );

        const vectorSource = new VectorSource({
            features: [targetArea],
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

        // 📍 Lokasi user
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude, accuracy: acc } = pos.coords;
                    const userLonLat = [longitude, latitude];
                    const userPoint = fromLonLat(userLonLat);
                    setAccuracy(acc);

                    // 🔴 Marker pengguna
                    const userFeature = new Feature({
                        geometry: new Point(userPoint),
                    });

                    userFeature.setStyle(
                        new Style({
                            image: new CircleStyle({
                                radius: 6,
                                fill: new Fill({ color: 'red' }),
                                stroke: new Stroke({ color: 'white', width: 2 }),
                            }),
                        })
                    );

                    // 🔵 Lingkaran akurasi user
                    const accuracyCircle = new Feature({
                        geometry: new Circle(userPoint, acc),
                    });

                    accuracyCircle.setStyle(
                        new Style({
                            fill: new Fill({ color: 'rgba(255, 0, 0, 0.1)' })
                        })
                    );

                    // ➡️ Garis antara user dan tujuan
                    const route = new Feature({
                        geometry: new LineString([userPoint, targetPoint]),
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

                    // Masukin semua fitur ke map
                    vectorSource.addFeatures([userFeature, accuracyCircle, route]);

                    const jarak = getDistance(userLonLat, TARGET_COORD);
                    setDistance(jarak);

                    map.getView().fit(vectorSource.getExtent(), {
                        padding: [80, 80, 80, 80],
                        duration: 1000,
                        maxZoom: 17,
                    });
                },
                (err) => {
                    console.error("Gagal dapetin lokasi:", err.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                }
            );
        }

        return () => map.setTarget(null);
    }, []);

    return (
        <div className="pt-15 px-10">
            <div
                ref={targetRef}
                style={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            />
            {distance && (
                <p className="desc text-gray-700 pt-3">
                    🧭 Jarak dari lokasimu ke Desa Sukolilo: {(distance / 1000).toFixed(2)} km
                    <br />
                    🎯 Akurasi Lokasi: ±{Math.round(accuracy)} meter
                </p>
            )}
        </div>
    );
};

export default MapWithUserLocation;
