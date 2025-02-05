import { createContext, useCallback, useContext, useMemo } from 'react';
import envConfig from '../config/env.config';
import axios from 'axios';
import { getMessageFromError } from '../utils/utils';
import useAppStore from '../store/appStore';
import { IApiResponseData } from '@/types/common.type';

interface IHttpContextProviderType {
	get: <RT>(endpoint: string, headers?: object) => Promise<IApiResponseData<RT>>;
	post: <RT>(endpoints: string, requestBody: object | Array<object>, headers?: object) => Promise<IApiResponseData<RT>>;
	put: <RT>(endpoints: string, requestBody: object | Array<object>, headers?: object) => Promise<IApiResponseData<RT>>;
	deleteMe: <RT>(endpoints: string, headers?: object) => Promise<IApiResponseData<RT>>;
	patch: <RT>(
		endpoints: string,
		requestBody: object | Array<object>,
		headers?: object
	) => Promise<IApiResponseData<RT>>;
}

export const HttpContext = createContext<IHttpContextProviderType | undefined>(undefined);

const AxiosService = axios.create({
	baseURL: envConfig.API_BASE_URL
});

export const HttpContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const setIsAppLoading = useAppStore(state => state.setIsAppLoading);

	AxiosService.defaults.headers.common.Accept = 'application/json';
	AxiosService.defaults.headers.common['Content-Type'] = 'application/json';

	const get = useCallback(
		async <RT,>(endpoint: string, headers = {}, showLoading = false): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			return AxiosService.get(endpoint, { headers })
				.then(res => {
					return {
						success: true,
						response: res?.data,
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
		[setIsAppLoading]
	);

	const post = useCallback(
		async <RT,>(
			endpoint: string,
			requestBody: object | Array<object>,
			headers = {},
			showLoading = false
		): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

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
		[setIsAppLoading]
	);

	const put = useCallback(
		async <RT,>(
			endpoint: string,
			requestBody: object | Array<object>,
			headers = {},
			showLoading = false
		): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

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
		[setIsAppLoading]
	);

	const patch = useCallback(
		async <RT,>(
			endpoint: string,
			requestBody: object | Array<object>,
			headers = {},
			showLoading = false
		): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

			return AxiosService.patch(endpoint, requestBody, { headers })
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
		[setIsAppLoading]
	);

	const deleteMe = useCallback(
		async <RT,>(endpoint: string, headers = {}, showLoading = false): Promise<IApiResponseData<RT>> => {
			if (showLoading) setIsAppLoading(true);

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
		[setIsAppLoading]
	);

	const contextValue = useMemo(() => ({ get, post, put, deleteMe, patch }), [get, post, put, deleteMe, patch]);

	return <HttpContext.Provider value={contextValue}>{children}</HttpContext.Provider>;
};

export const useHttpMethodContext = () => {
	const context = useContext(HttpContext);

	if (!context) {
		throw new Error('useHttpMethodContext must be used within a UserProvider');
	}

	return context;
};
