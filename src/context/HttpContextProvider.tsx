import { createContext, useCallback, useContext } from 'react';
import envConfig from '../config/env.config';
import axios from 'axios';
import { IApiResponseData } from '../types/common';
import { getMessageFromError } from '../utils/utils';
import useAppStore from '../store/appStore';
import { useAwsAmplifyAuthContent } from './AwsAmplifyAuthProvider';

interface IHttpContextProviderType {
	get: <RT>(endpoint: string, headers?: object) => Promise<IApiResponseData<RT>>;
	post: <RT>(endpoints: string, requestBody: object | Array<object>, headers?: object) => Promise<IApiResponseData<RT>>;
	put: <RT>(endpoints: string, requestBody: object | Array<object>, headers?: object) => Promise<IApiResponseData<RT>>;
	deleteMe: <RT>(endpoints: string, headers?: object) => Promise<IApiResponseData<RT>>;
}

export const HttpContext = createContext<IHttpContextProviderType | undefined>(undefined);

const AxiosService = axios.create({
	baseURL: envConfig.API_BASE_URL
});

export const HttpContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const setIsAppLoading = useAppStore(state => state.setIsAppLoading);
	const authenticatedUser = useAppStore(state => state.authenticatedUser);
	const isUserLoggedIn = useAppStore(state => state.isUserLoggedIn);

	const { getCurrentUserSessions } = useAwsAmplifyAuthContent();

	AxiosService.defaults.headers.common.Accept = 'application/json';
	AxiosService.defaults.headers.common['Content-Type'] = 'application/json';

	// TODO: add API token from axiosInstance
	const attachToken = useCallback(async () => {
		if (authenticatedUser && isUserLoggedIn) {
			const { success, response } = await getCurrentUserSessions();

			if (!success || !response || !response.tokens) return;

			const token = response.tokens.accessToken.toString();

			AxiosService.defaults.headers.common.Authorization = `Bearer ${token}`;
		}
	}, [authenticatedUser, getCurrentUserSessions, isUserLoggedIn]);

	const get = useCallback(
		async <RT,>(endpoint: string, headers = {}, showLoading = false): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			await attachToken();

			return AxiosService.get(endpoint, { headers })
				.then(res => {
					return {
						success: true,
						response: res?.data?.data || res?.data,
						errorMsg: ''
					};
				})
				.catch(err => {
					console.log(`🛑 GET: ${endpoint}:`, err?.response?.data?.error ?? err);
					return { success: false, errorMsg: getMessageFromError(err?.response?.data?.error ?? err) };
				})
				.finally(() => {
					if (showLoading) setIsAppLoading(false);
				});
		},
		[attachToken, setIsAppLoading]
	);

	const post = useCallback(
		async <RT,>(
			endpoint: string,
			requestBody: object | Array<object>,
			headers = {},
			showLoading = false
		): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			await attachToken();

			return AxiosService.post(endpoint, requestBody, { headers })
				.then(res => {
					return {
						success: true,
						response: res?.data?.data || res?.data,
						errorMsg: ''
					};
				})
				.catch(err => {
					return { success: false, errorMsg: getMessageFromError(err?.response?.data?.error ?? err) };
				})
				.finally(() => {
					if (showLoading) setIsAppLoading(false);
				});
		},
		[attachToken, setIsAppLoading]
	);

	const put = useCallback(
		async <RT,>(
			endpoint: string,
			requestBody: object | Array<object>,
			headers = {},
			showLoading = false
		): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			await attachToken();

			return AxiosService.put(endpoint, requestBody, { headers })
				.then(res => {
					return {
						success: true,
						response: res?.data?.data || res?.data,
						errorMsg: ''
					};
				})
				.catch(err => {
					return { success: false, errorMsg: getMessageFromError(err?.response?.data?.error ?? err) };
				})
				.finally(() => {
					if (showLoading) setIsAppLoading(false);
				});
		},
		[attachToken, setIsAppLoading]
	);

	const deleteMe = useCallback(
		async <RT,>(endpoint: string, headers = {}, showLoading = false): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			await attachToken();

			return AxiosService.delete(endpoint, { headers })
				.then(res => {
					return {
						success: true,
						response: res?.data?.data || res?.data,
						errorMsg: ''
					};
				})
				.catch(err => {
					return { success: false, errorMsg: getMessageFromError(err?.response?.data?.error ?? err) };
				})
				.finally(() => {
					if (showLoading) setIsAppLoading(false);
				});
		},
		[attachToken, setIsAppLoading]
	);

	return <HttpContext.Provider value={{ get, post, put, deleteMe }}>{children}</HttpContext.Provider>;
};

export const useHttpMethodContext = () => {
	const context = useContext(HttpContext);

	if (!context) {
		throw new Error('useHttpMethodContext must be used within a UserProvider');
	}

	return context;
};
