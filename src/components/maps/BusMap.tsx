import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useBusStore } from '../../stores/busStore';

// Replace with your Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V4YW1wbGUwMDAwMnducGxlMDAwMCJ9.example';

const BusMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { buses, selectedBus, setSelectedBus } = useBusStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.2090, 28.6139], // Delhi coordinates
      zoom: 11
    });

    map.current.on('load', () => {
      setLoading(false);
      
      // Add bus markers
      buses.forEach((bus) => {
        const el = document.createElement('div');
        el.className = `w-4 h-4 rounded-full cursor-pointer ${
          bus.status === 'on-time' 
            ? 'bg-green-500' 
            : bus.status === 'delayed' 
              ? 'bg-amber-500' 
              : 'bg-red-500'
        }`;

        const marker = new mapboxgl.Marker(el)
          .setLngLat(bus.location)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold">${bus.id}</h3>
                  <p class="text-sm">${bus.route}</p>
                  <p class="text-sm">Driver: ${bus.driver}</p>
                  <p class="text-xs text-gray-500">Last updated: ${bus.lastUpdated}</p>
                </div>
              `)
          )
          .addTo(map.current!);

        el.addEventListener('click', () => {
          setSelectedBus(bus);
        });
      });
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  // Update markers when buses change
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    const markers = document.getElementsByClassName('mapboxgl-marker');
    Array.from(markers).forEach(marker => marker.remove());

    // Add updated markers
    buses.forEach((bus) => {
      const el = document.createElement('div');
      el.className = `w-4 h-4 rounded-full cursor-pointer ${
        bus.status === 'on-time' 
          ? 'bg-green-500' 
          : bus.status === 'delayed' 
            ? 'bg-amber-500' 
            : 'bg-red-500'
      }`;

      const marker = new mapboxgl.Marker(el)
        .setLngLat(bus.location)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold">${bus.id}</h3>
                <p class="text-sm">${bus.route}</p>
                <p class="text-sm">Driver: ${bus.driver}</p>
                <p class="text-xs text-gray-500">Last updated: ${bus.lastUpdated}</p>
              </div>
            `)
        )
        .addTo(map.current);

      el.addEventListener('click', () => {
        setSelectedBus(bus);
      });
    });
  }, [buses]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-blue-200 rounded-full mb-2"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 flex flex-col space-y-2">
        <button 
          onClick={() => map.current?.zoomIn()}
          className="p-2 hover:bg-slate-100 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button 
          onClick={() => map.current?.zoomOut()}
          className="p-2 hover:bg-slate-100 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <div className="border-t border-slate-200 my-1"></div>
        <button 
          onClick={() => map.current?.flyTo({ center: [77.2090, 28.6139], zoom: 11 })}
          className="p-2 hover:bg-slate-100 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center text-green-600">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
            On Time: {buses.filter(b => b.status === 'on-time').length}
          </span>
          <span className="flex items-center text-amber-600">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
            Delayed: {buses.filter(b => b.status === 'delayed').length}
          </span>
          <span className="flex items-center text-red-600">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5"></span>
            Stopped: {buses.filter(b => b.status === 'stopped').length}
          </span>
        </div>
      </div>

      {selectedBus && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-4 max-w-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{selectedBus.id}</h3>
            <button 
              onClick={() => setSelectedBus(null)}
              className="text-slate-400 hover:text-slate-600"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-slate-600 mb-1">{selectedBus.route}</p>
          <p className="text-sm text-slate-600 mb-1">Driver: {selectedBus.driver}</p>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-500">Passengers</span>
              <span className="text-xs font-medium">
                {selectedBus.passengers.current}/{selectedBus.passengers.capacity}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                  selectedBus.status === 'on-time' 
                    ? 'bg-green-500' 
                    : selectedBus.status === 'delayed' 
                      ? 'bg-amber-500' 
                      : 'bg-red-500'
                }`}
                style={{ 
                  width: `${(selectedBus.passengers.current / selectedBus.passengers.capacity) * 100}%` 
                }}
              ></div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <button 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => {
                map.current?.flyTo({
                  center: selectedBus.location,
                  zoom: 14,
                  duration: 1500
                });
              }}
            >
              Zoom to Location
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusMap;