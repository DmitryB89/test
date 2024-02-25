import {create} from "zustand";
import {DevType} from "../components/Developers/DevList.tsx";

export type DevStore = {
    devs: DevType[];
    dev: Omit<DevType, "id">;
    selectedFilter: string;
    filterDevs: (filter: string) => void;
    clearFilters: () => void;
    addDeveloper: (dev: DevType) => void;
    removeDeveloper: (dev: DevType) => void;
};

export const useDevStore = create<DevStore>((set) => ({
    devs: [
        {
            id: 1,
            name: 'Dmitry Juniorovich',
            rank: 'junior',
            branch: 'frontend'
        },
        {
            id: 2,
            name: 'Vasyan Vasyanov',
            rank: 'middle',
            branch: 'frontend'
        },
        {
            id: 3,
            name: 'Nickolai Nidvoraev',
            rank: 'senior',
            branch: 'backend'
        },
        {
            id: 4,
            name: 'San Sanych',
            rank: 'senior',
            branch: 'frontend'
        },
        {
            id: 5,
            name: 'Elena Ivanova ',
            rank: 'senior',
            branch: 'backend'
        },
        {
            id: 6,
            name: 'Kseniya Smirnova',
            rank: 'senior',
            branch: 'backend'
        },
        {
            id: 7,
            name: 'Alexander Pushkin',
            rank: 'junior',
            branch: 'frontend'
        }, {
            id: 8,
            name: 'Nickolai Petrov',
            rank: 'middle',
            branch: 'backend'
        },
        {
            id: 9,
            name: 'Alex Shamanov',
            rank: 'senior',
            branch: 'frontend'
        },
        {
            id: 10,
            name: 'Nickolai Durakov',
            rank: 'middle',
            branch: 'frontend'
        },
    ],
    dev: {name: '', rank: '', branch: ''},
    selectedFilter: '',

    filterDevs: (filter) => {
        set((state) => ({
            selectedFilter: filter,
            devs: [...state.devs].sort((a, b) => a[filter].localeCompare(b[filter])),
        }));
    },
    clearFilters: () => {
        set((state) => ({
            selectedFilter: '', devs: state.devs
        }));

    },
    addDeveloper: (dev) => {
        set((state) => ({devs: [...state.devs, dev]}));
    },
    removeDeveloper: (dev) => {
        set((state) => ({devs: state.devs.filter((d) => d.id !== dev.id)}));
    },
}));

