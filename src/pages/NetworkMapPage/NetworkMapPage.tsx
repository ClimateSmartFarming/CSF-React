// src/pages/NetworkMapPage/NetworkMapPage.tsx
import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import styles from '../HomePage/HomePage.module.css';
import mapStyles from './NetworkMapPage.module.css';

// Import Leaflet CSS in your index.html or App.tsx:
// <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
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
  coordinates: [number, number]; // [lat, lng]
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

const MEMBERS_PER_PAGE = 12;

const NetworkMapPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<NetworkMember | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'dairy' | 'apple' | 'extension'>('all');
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMembers = activeFilter === 'all'
    ? networkMembers
    : networkMembers.filter(m => m.type === activeFilter);

  // Pagination calculations
  const totalPages = Math.ceil(filteredMembers.length / MEMBERS_PER_PAGE);
  const startIndex = (currentPage - 1) * MEMBERS_PER_PAGE;
  const endIndex = startIndex + MEMBERS_PER_PAGE;
  const currentPageMembers = filteredMembers.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

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

  const handleMemberClick = (member: NetworkMember) => {
    setSelectedMember(member);
    setMapCenter(member.coordinates);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
    [40.4961, -79.7621], // Southwest
    [45.0158, -71.8562]  // Northeast
  ];

  // Center of New York State
  const nysCenter: [number, number] = [42.9538, -75.5268];

  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="CSF Network Map"
          subtitle="Explore our network of farmers and extension associates across New York State"
        />

        <Container>
          <section className={mapStyles.mapSection}>

            {/* Filter Buttons */}
            <div className={mapStyles.filterBar}>
              <button
                className={`${mapStyles.filterButton} ${activeFilter === 'all' ? mapStyles.active : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All ({counts.all})
              </button>
              <button
                className={`${mapStyles.filterButton} ${mapStyles.dairy} ${activeFilter === 'dairy' ? mapStyles.active : ''}`}
                onClick={() => setActiveFilter('dairy')}
              >
                🐄 Dairy Farmers ({counts.dairy})
              </button>
              <button
                className={`${mapStyles.filterButton} ${mapStyles.apple} ${activeFilter === 'apple' ? mapStyles.active : ''}`}
                onClick={() => setActiveFilter('apple')}
              >
                🍎 Apple Farmers ({counts.apple})
              </button>
              <button
                className={`${mapStyles.filterButton} ${mapStyles.extension} ${activeFilter === 'extension' ? mapStyles.active : ''}`}
                onClick={() => setActiveFilter('extension')}
              >
                🏛️ Extension Associates ({counts.extension})
              </button>
            </div>

            {/* Map and Info Panel */}
            <div className={mapStyles.mapWrapper}>
              {/* Leaflet Map */}
              <div className={mapStyles.mapContainer}>
                <MapContainer
                  center={nysCenter}
                  zoom={7}
                  className={mapStyles.leafletMap}
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
                        click: () => handleMemberClick(member),
                      }}
                    >
                      <Popup>
                        <div className={mapStyles.popupContent}>
                          <strong>{member.name}</strong>
                          <br />
                          <span style={{ color: getMarkerColor(member.type) }}>
                            {getTypeEmoji(member.type)} {getTypeLabel(member.type)}
                          </span>
                          <br />
                          <small>{member.location}</small>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>

                {/* Legend */}
                <div className={mapStyles.legend}>
                  <h4>Legend</h4>
                  <div className={mapStyles.legendItem}>
                    <span className={`${mapStyles.legendDot} ${mapStyles.dairyDot}`}></span>
                    <span>Dairy Farmer</span>
                  </div>
                  <div className={mapStyles.legendItem}>
                    <span className={`${mapStyles.legendDot} ${mapStyles.appleDot}`}></span>
                    <span>Apple Farmer</span>
                  </div>
                  <div className={mapStyles.legendItem}>
                    <span className={`${mapStyles.legendDot} ${mapStyles.extensionDot}`}></span>
                    <span>Extension Associate</span>
                  </div>
                </div>
              </div>

              {/* Info Panel */}
              <div className={mapStyles.infoPanel}>
                {selectedMember ? (
                  <div className={mapStyles.memberInfo}>
                    <div className={mapStyles.memberHeader}>
                      <span className={mapStyles.memberIcon}>{getTypeEmoji(selectedMember.type)}</span>
                      <span
                        className={mapStyles.memberType}
                        style={{ backgroundColor: getMarkerColor(selectedMember.type) }}
                      >
                        {getTypeLabel(selectedMember.type)}
                      </span>
                    </div>
                    <h3 className={mapStyles.memberName}>{selectedMember.name}</h3>
                    <p className={mapStyles.memberLocation}>
                      📍 {selectedMember.location}
                    </p>
                    <p className={mapStyles.memberCounty}>{selectedMember.county}</p>
                    <p className={mapStyles.memberDescription}>{selectedMember.description}</p>
                    <button
                      className={mapStyles.contactButton}
                      onClick={() => alert('Contact form coming soon!')}
                    >
                      Contact
                    </button>
                  </div>
                ) : (
                  <div className={mapStyles.placeholder}>
                    <span className={mapStyles.placeholderIcon}>👆</span>
                    <p>Click on a marker to view details about network members</p>
                  </div>
                )}
              </div>
            </div>

            {/* Member List with Pagination */}
            <div className={mapStyles.memberList}>
              <div className={mapStyles.memberListHeader}>
                <h3>Network Members ({filteredMembers.length})</h3>
              </div>

              <div className={mapStyles.memberGrid}>
                {currentPageMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`${mapStyles.memberCard} ${selectedMember?.id === member.id ? mapStyles.selected : ''}`}
                    onClick={() => handleMemberClick(member)}
                  >
                    <span className={mapStyles.cardIcon}>{getTypeEmoji(member.type)}</span>
                    <div className={mapStyles.cardContent}>
                      <h4>{member.name}</h4>
                      <p>{member.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className={mapStyles.paginationWrapper}>
                  <div className={mapStyles.pagination}>
                    <button
                      className={`${mapStyles.pageButton} ${mapStyles.navButton}`}
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>

                    <div className={mapStyles.pageNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          className={`${mapStyles.pageButton} ${currentPage === page ? mapStyles.activePage : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      className={`${mapStyles.pageButton} ${mapStyles.navButton}`}
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </button>
                  </div>

                  <div className={mapStyles.resultsInfo}>
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length} members
                  </div>
                </div>
              )}
            </div>

          </section>
        </Container>
      </main>
    </div>
  );
};

export default NetworkMapPage;