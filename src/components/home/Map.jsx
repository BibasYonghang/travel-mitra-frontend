import React from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';

const { BaseLayer } = LayersControl;

const position = [27.6667, 85.3397];

export default function Map() {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom className='h-[60vh] w-full px-2'>
            <LayersControl position="topright">
                {/* Street Map */}
                <BaseLayer checked name="Street Map">
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>

                {/* Satellite Map */}
                <BaseLayer name="Satellite">
                    <TileLayer
                        attribution='&copy; Esri & contributors'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </BaseLayer>
            </LayersControl>

            <Marker position={position}>
                <Popup>Kathmandu Valley</Popup>
            </Marker>
        </MapContainer>
    );
}
