import { create } from 'zustand';

export const useUrlStore = create(() => ({
	url: 'http://localhost:8080',
}));

export const useEmailStore = create((set) => ({
	email: '',
    setEmail: (email) => set({email}),
    clearEmail: () => set({email: ''})
}));
