import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';
import { getDistance } from 'ol/sphere';

const TARGET_COORD = [112.7304038, -7.9458801]; // [lon, lat]

const MapWithUserLocation = () => {
    const mapRef = useRef();
    const targetRef = useRef();
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        const targetPoint = fromLonLat(TARGET_COORD);

        // Titik tujuan
        const targetFeature = new Feature({
            geometry: new Point(targetPoint),
        });

        targetFeature.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 8,
                    fill: new Fill({ color: 'blue' }),
                    stroke: new Stroke({ color: 'white', width: 2 }),
                }),
            })
        );

        // Layer vector untuk marker
        const vectorSource = new VectorSource({
            features: [targetFeature],
        });

        const vectorLayer = new VectorLayer({ source: vectorSource });

        // Inisialisasi map
        const map = new Map({
            target: targetRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                vectorLayer,
            ],
            view: new View({
                center: targetPoint,
                zoom: 15,
            }),
        });

        mapRef.current = map;

        // Dapatkan lokasi user
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const userLonLat = [pos.coords.longitude, pos.coords.latitude];
                const userPoint = fromLonLat(userLonLat);

                const userFeature = new Feature({
                    geometry: new Point(userPoint),
                });

                userFeature.setStyle(
                    new Style({
                        image: new CircleStyle({
                            radius: 8,
                            fill: new Fill({ color: 'red' }),
                            stroke: new Stroke({ color: 'white', width: 2 }),
                        }),
                    })
                );

                vectorSource.addFeature(userFeature);

                // Hitung jarak (dalam meter)
                const jarak = getDistance(userLonLat, TARGET_COORD);
                setDistance(jarak);

                // Auto center kalau mau
                map.getView().fit(vectorSource.getExtent(), {
                    padding: [100, 100, 100, 100],
                    duration: 1000,
                });
            });
        }

        return () => map.setTarget(null);
    }, []);

    return (
        <div className="pt-15 px-10">
            <div
                ref={targetRef}
                style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden' }}
            />
            {distance && (
                <p className="desc text-gray-700">
                    🧭 Jarak ke Desa Sukolilo: {(distance / 1000).toFixed(2)} km
                </p>
            )}
        </div>
    );
};

export default MapWithUserLocation;
