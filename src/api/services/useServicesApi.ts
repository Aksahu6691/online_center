import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { IServiceResponse } from './services.types';
import { useHttpMethodContext } from '@/context/HttpContextProvider';

const useServicesApi = () => {
	const { get } = useHttpMethodContext();

	const getServices = useCallback(
		async (serviceId?: string): Promise<IApiResponseData<IServiceResponse>> => {
			const endpoint = serviceId ? `/service/get/${serviceId}` : `/service/get`;
			return await get<IServiceResponse>(endpoint);
		},
		[get]
	);

	return { getServices };
};

export default useServicesApi;
