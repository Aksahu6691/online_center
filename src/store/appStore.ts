import { IGlobalUserDetails } from '@/types/common.type';
import { create } from 'zustand';

interface IAppState {
	isAppLoading: boolean;
	setIsAppLoading: (isAppLoading: boolean) => void;
	userDetails: IGlobalUserDetails | undefined;
	setUserDetails: (userDetails: IGlobalUserDetails) => void;
	isUserLoggedIn: boolean;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
}

const useAppStore = create<IAppState>(set => ({
	isAppLoading: false,
	setIsAppLoading: (isAppLoading: boolean) => set({ isAppLoading }),
	userDetails: undefined,
	setUserDetails: (userDetails: IGlobalUserDetails) => set({ userDetails }),
	isUserLoggedIn: false,
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({ isUserLoggedIn })
}));

export default useAppStore;
