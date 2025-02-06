import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ILoginRequestBody, ILoginResponse } from './auth.types';

const useAuthApi = () => {
	const { post } = useHttpMethodContext();

	const loginUser = useCallback(
		async (requestBody: ILoginRequestBody): Promise<IApiResponseData<ILoginResponse>> => {
			return await post<ILoginResponse>(`/user/login`, requestBody);
		},
		[post]
	);

	return { loginUser };
};

export default useAuthApi;
