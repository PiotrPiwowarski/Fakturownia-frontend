import { create } from 'zustand';

const useStore = create(() => ({
    url: 'http://localhost:8080'
}));

export default useStore;