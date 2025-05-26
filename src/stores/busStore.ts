import { create } from 'zustand';

export interface Bus {
  id: string;
  location: [number, number];
  status: 'on-time' | 'delayed' | 'stopped';
  route: string;
  driver: string;
  passengers: {
    current: number;
    capacity: number;
  };
  lastUpdated: string;
}

interface BusStore {
  buses: Bus[];
  selectedBus: Bus | null;
  setSelectedBus: (bus: Bus | null) => void;
  updateBusLocation: (id: string, location: [number, number]) => void;
}

// Sample bus data
const initialBuses: Bus[] = [
  {
    id: 'DL-1756',
    location: [77.2090, 28.6139], // Delhi coordinates
    status: 'on-time',
    route: 'Route 522',
    driver: 'Rajesh Kumar',
    passengers: { current: 42, capacity: 60 },
    lastUpdated: '2 min ago'
  },
  {
    id: 'DL-2145',
    location: [77.2310, 28.6519],
    status: 'delayed',
    route: 'Route 340',
    driver: 'Amit Singh',
    passengers: { current: 58, capacity: 60 },
    lastUpdated: '1 min ago'
  },
  {
    id: 'DL-1823',
    location: [77.1855, 28.5245],
    status: 'stopped',
    route: 'Route 423',
    driver: 'Priya Sharma',
    passengers: { current: 12, capacity: 60 },
    lastUpdated: '5 min ago'
  }
];

export const useBusStore = create<BusStore>((set) => ({
  buses: initialBuses,
  selectedBus: null,
  setSelectedBus: (bus) => set({ selectedBus: bus }),
  updateBusLocation: (id, location) =>
    set((state) => ({
      buses: state.buses.map((bus) =>
        bus.id === id ? { ...bus, location } : bus
      ),
    })),
}));