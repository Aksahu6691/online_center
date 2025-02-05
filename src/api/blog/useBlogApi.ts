import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { IBlogResponse } from './blog.types';

const useBlogApi = () => {
	const { get } = useHttpMethodContext();

	const getBlogs = useCallback(
		async (id?: string): Promise<IApiResponseData<IBlogResponse[]>> => {
			const endpoint = id ? `/blog/get/${id}` : `/blog/get`;
			return await get<IBlogResponse[]>(endpoint);
		},
		[get]
	);

	return { getBlogs };
};

export default useBlogApi;
