import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { IServiceDeleteResponse, IServiceResponse } from './services.types';
import { useHttpMethodContext } from '@/context/HttpContextProvider';

const useServicesApi = () => {
	const { get, deleteMe } = useHttpMethodContext();

	const getServices = useCallback(
		async (serviceId?: string): Promise<IApiResponseData<IServiceResponse>> => {
			const endpoint = serviceId ? `/service/get/${serviceId}` : `/service/get`;
			return await get<IServiceResponse>(endpoint);
		},
		[get]
	);

	const deleteService = useCallback(
		async (serviceId: string): Promise<IApiResponseData<IServiceDeleteResponse>> => {
			return await deleteMe<IServiceDeleteResponse>(`/service/delete1/${serviceId}`);
		},
		[deleteMe]
	);

	return { getServices, deleteService };
};

export default useServicesApi;
