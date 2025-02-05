import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { IBlogResponse } from './blog.types';

const useBlogApi = () => {
	const { get } = useHttpMethodContext();

	const getBlogs = useCallback(
		async (limit?: number): Promise<IApiResponseData<IBlogResponse[]>> => {
			return await get<IBlogResponse[]>(`/blog/get?limit=${limit}`);
		},
		[get]
	);

	const getBlogById = useCallback(
		async (id: string): Promise<IApiResponseData<IBlogResponse>> => {
			return await get<IBlogResponse>(`/blog/get/${id}`);
		},
		[get]
	);

	return { getBlogs, getBlogById };
};

export default useBlogApi;
