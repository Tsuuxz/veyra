import { create } from 'zustand';
import { License, LicenseDevice } from '@/types';

interface LicenseState {
  license: License | null;
  devices: LicenseDevice[];
  isLoading: boolean;
  setLicense: (license: License | null) => void;
  setDevices: (devices: LicenseDevice[]) => void;
  setLoading: (isLoading: boolean) => void;
  clear: () => void;
}

export const useLicenseStore = create<LicenseState>((set) => ({
  license: null,
  devices: [],
  isLoading: true,
  
  setLicense: (license) => set({ license }),
  
  setDevices: (devices) => set({ devices }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  clear: () => set({ 
    license: null, 
    devices: [], 
    isLoading: false 
  }),
}));
