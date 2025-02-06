import { IGlobalUserDetails } from '@/types/common.type';
import { create } from 'zustand';

interface IAppState {
	isAppLoading: boolean;
	setIsAppLoading: (isAppLoading: boolean) => void;
	authenticatedUser: IGlobalUserDetails | undefined;
	setAuthenticatedUser: (authenticatedUser: IGlobalUserDetails | undefined) => void;
	isUserLoggedIn: boolean;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	accessToken?: string;
	setAccessToken: (accessToken: string) => void;
}

const useAppStore = create<IAppState>(set => ({
	isAppLoading: false,
	setIsAppLoading: (isAppLoading: boolean) => set({ isAppLoading }),
	authenticatedUser: undefined,
	setAuthenticatedUser: (authenticatedUser: IGlobalUserDetails | undefined) => set({ authenticatedUser }),
	isUserLoggedIn: false,
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({ isUserLoggedIn }),
	accessToken: '',
	setAccessToken: (accessToken: string) => set({ accessToken })
}));

export default useAppStore;
