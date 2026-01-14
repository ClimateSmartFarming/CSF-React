// src/components/sections/MapSection/MapSection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapSection.module.css';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom colored icons
const createColoredIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      ">
        ${color === '#1976d2' ? '🐄' : color === '#d32f2f' ? '🍎' : '🏛️'}
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

const dairyIcon = createColoredIcon('#1976d2');
const appleIcon = createColoredIcon('#d32f2f');
const extensionIcon = createColoredIcon('#2e7d32');

interface NetworkMember {
  id: string;
  name: string;
  type: 'dairy' | 'apple' | 'extension';
  location: string;
  coordinates: [number, number];
  description: string;
  county: string;
}

const networkMembers: NetworkMember[] = [
  // Dairy Farmers
  {
    id: 'dairy-1',
    name: 'Hillside Dairy Farm',
    type: 'dairy',
    location: 'Cortland, NY',
    coordinates: [42.6012, -76.1804],
    description: 'Family-owned dairy farm focusing on sustainable practices and climate adaptation.',
    county: 'Cortland County'
  },
  {
    id: 'dairy-2',
    name: 'Green Valley Dairy',
    type: 'dairy',
    location: 'Canton, NY',
    coordinates: [44.5956, -75.1690],
    description: 'Third-generation dairy farm implementing cover crops and improved manure management.',
    county: 'St. Lawrence County'
  },
  {
    id: 'dairy-3',
    name: 'Sunrise Dairy',
    type: 'dairy',
    location: 'Cooperstown, NY',
    coordinates: [42.7006, -74.9240],
    description: 'Mid-sized dairy operation working on heat stress mitigation for livestock.',
    county: 'Otsego County'
  },
  {
    id: 'dairy-4',
    name: 'Mountain View Dairy',
    type: 'dairy',
    location: 'Lowville, NY',
    coordinates: [43.7867, -75.4921],
    description: 'Dairy farm utilizing rotational grazing and soil health practices.',
    county: 'Lewis County'
  },
  {
    id: 'dairy-5',
    name: 'Lakeshore Dairy',
    type: 'dairy',
    location: 'Watertown, NY',
    coordinates: [43.9748, -75.9107],
    description: 'Large dairy operation focused on water management and nutrient efficiency.',
    county: 'Jefferson County'
  },
  {
    id: 'dairy-6',
    name: 'Rolling Hills Dairy',
    type: 'dairy',
    location: 'Bath, NY',
    coordinates: [42.3370, -77.3177],
    description: 'Dairy farm implementing tile drainage and flood management strategies.',
    county: 'Steuben County'
  },

  // Apple Farmers
  {
    id: 'apple-1',
    name: 'Hudson Valley Orchards',
    type: 'apple',
    location: 'Highland, NY',
    coordinates: [41.7212, -73.9607],
    description: 'Apple orchard using frost protection and integrated pest management.',
    county: 'Ulster County'
  },
  {
    id: 'apple-2',
    name: 'Finger Lakes Apple Farm',
    type: 'apple',
    location: 'Geneva, NY',
    coordinates: [42.8689, -76.9777],
    description: 'Research-focused orchard working with Cornell on climate-resilient varieties.',
    county: 'Ontario County'
  },
  {
    id: 'apple-3',
    name: 'Lake Ontario Orchards',
    type: 'apple',
    location: 'Sodus, NY',
    coordinates: [43.2348, -77.0622],
    description: 'Large apple operation utilizing CSF freeze risk tools for frost protection.',
    county: 'Wayne County'
  },
  {
    id: 'apple-4',
    name: 'Champlain Valley Apples',
    type: 'apple',
    location: 'Peru, NY',
    coordinates: [44.5784, -73.5268],
    description: 'Apple farm adapting to changing growing seasons and pest pressures.',
    county: 'Clinton County'
  },
  {
    id: 'apple-5',
    name: 'Capital Region Orchards',
    type: 'apple',
    location: 'Altamont, NY',
    coordinates: [42.7009, -74.0335],
    description: 'Family orchard implementing water deficit monitoring and irrigation.',
    county: 'Albany County'
  },

  // Extension Associates
  {
    id: 'ext-1',
    name: 'Cornell Cooperative Extension - Ithaca',
    type: 'extension',
    location: 'Ithaca, NY',
    coordinates: [42.4440, -76.5019],
    description: 'Main CSF program hub at Cornell University providing statewide support.',
    county: 'Tompkins County'
  },
  {
    id: 'ext-2',
    name: 'CCE Hudson Valley Regional Office',
    type: 'extension',
    location: 'Millbrook, NY',
    coordinates: [41.7851, -73.6940],
    description: 'Regional extension office supporting farmers in the Hudson Valley region.',
    county: 'Dutchess County'
  },
  {
    id: 'ext-3',
    name: 'CCE North Country Regional Office',
    type: 'extension',
    location: 'Plattsburgh, NY',
    coordinates: [44.6995, -73.4529],
    description: 'Extension office serving dairy and crop farmers in Northern New York.',
    county: 'Clinton County'
  },
  {
    id: 'ext-4',
    name: 'CCE Western NY Regional Office',
    type: 'extension',
    location: 'Batavia, NY',
    coordinates: [42.9981, -78.1875],
    description: 'Regional hub for vegetable, dairy, and field crop climate support.',
    county: 'Genesee County'
  },
  {
    id: 'ext-5',
    name: 'CCE Central NY Office',
    type: 'extension',
    location: 'Syracuse, NY',
    coordinates: [43.0481, -76.1474],
    description: 'Extension office coordinating urban agriculture and regional outreach.',
    county: 'Onondaga County'
  },
  {
    id: 'ext-6',
    name: 'CCE Southern Tier Office',
    type: 'extension',
    location: 'Binghamton, NY',
    coordinates: [42.0987, -75.9180],
    description: 'Extension support for diverse farming operations in the Southern Tier.',
    county: 'Broome County'
  },
  {
    id: 'ext-7',
    name: 'Harvest NY - Albany',
    type: 'extension',
    location: 'Albany, NY',
    coordinates: [42.6526, -73.7562],
    description: 'Harvest NY Ag Climate Resiliency specialists supporting Capital Region farmers.',
    county: 'Albany County'
  }
];

// Component to handle map view changes
const MapController: React.FC<{ center: [number, number] | null }> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 10, { duration: 1 });
    }
  }, [center, map]);

  return null;
};

const MapSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dairy' | 'apple' | 'extension'>('all');
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  const filteredMembers = activeFilter === 'all'
    ? networkMembers
    : networkMembers.filter(m => m.type === activeFilter);

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'dairy': return dairyIcon;
      case 'apple': return appleIcon;
      case 'extension': return extensionIcon;
      default: return DefaultIcon;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'dairy': return 'Dairy Farmer';
      case 'apple': return 'Apple Farmer';
      case 'extension': return 'Extension Associate';
      default: return 'Network Member';
    }
  };

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'dairy': return '🐄';
      case 'apple': return '🍎';
      case 'extension': return '🏛️';
      default: return '📍';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'dairy': return '#1976d2';
      case 'apple': return '#d32f2f';
      case 'extension': return '#2e7d32';
      default: return '#666';
    }
  };

  const counts = {
    all: networkMembers.length,
    dairy: networkMembers.filter(m => m.type === 'dairy').length,
    apple: networkMembers.filter(m => m.type === 'apple').length,
    extension: networkMembers.filter(m => m.type === 'extension').length
  };

  // New York State bounds
  const nysBounds: [[number, number], [number, number]] = [
    [40.4961, -79.7621],
    [45.0158, -71.8562]
  ];

  // Center of New York State
  const nysCenter: [number, number] = [42.9538, -75.5268];

  return (
    <section className={styles.mapSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Our Network</h2>
          <p className={styles.sectionSubtitle}>
            Connect with farmers and extension associates across New York State
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterBar}>
          <button
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All ({counts.all})
          </button>
          <button
            className={`${styles.filterButton} ${styles.dairy} ${activeFilter === 'dairy' ? styles.active : ''}`}
            onClick={() => setActiveFilter('dairy')}
          >
            🐄 Dairy Farmers ({counts.dairy})
          </button>
          <button
            className={`${styles.filterButton} ${styles.apple} ${activeFilter === 'apple' ? styles.active : ''}`}
            onClick={() => setActiveFilter('apple')}
          >
            🍎 Apple Farmers ({counts.apple})
          </button>
          <button
            className={`${styles.filterButton} ${styles.extension} ${activeFilter === 'extension' ? styles.active : ''}`}
            onClick={() => setActiveFilter('extension')}
          >
            🏛️ Extension Associates ({counts.extension})
          </button>
        </div>

        {/* Map Container - 50% taller, 80% width (10% off each side) */}
        <div className={styles.mapContainer} style={{ height: '750px', width: '80%', margin: '0 auto' }}>
          <MapContainer
            center={nysCenter}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            maxBounds={nysBounds}
            minZoom={6}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapController center={mapCenter} />

            {filteredMembers.map((member) => (
              <Marker
                key={member.id}
                position={member.coordinates}
                icon={getMarkerIcon(member.type)}
                eventHandlers={{
                  click: () => setMapCenter(member.coordinates),
                }}
              >
                <Popup>
                  <div className={styles.popupContent}>
                    <strong>{member.name}</strong>
                    <br />
                    <span style={{ color: getMarkerColor(member.type) }}>
                      {getTypeEmoji(member.type)} {getTypeLabel(member.type)}
                    </span>
                    <br />
                    <small>{member.location}</small>
                    <br />
                    <small className={styles.popupCounty}>{member.county}</small>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Legend */}
          <div className={styles.legend}>
            <h4>Legend</h4>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dairyDot}`}></span>
              <span>Dairy Farmer</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.appleDot}`}></span>
              <span>Apple Farmer</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.extensionDot}`}></span>
              <span>Extension Associate</span>
            </div>
          </div>
        </div>

        {/* View Full Network Button */}
        <div className={styles.viewMoreWrapper}>
          <Link to="/network" className={styles.viewMoreButton}>
            View Full Network Directory →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;