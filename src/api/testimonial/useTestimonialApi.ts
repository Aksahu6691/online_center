import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ITestimonialResponse } from './testimonial.types';

const useTestimonialApi = () => {
	const { get } = useHttpMethodContext();

	const getTestimonials = useCallback(
		async (id?: string): Promise<IApiResponseData<ITestimonialResponse>> => {
			const endpoint = id ? `/testimonial/get/${id}` : `/testimonial/get`;
			return await get<ITestimonialResponse>(endpoint);
		},
		[get]
	);

	return { getTestimonials };
};

export default useTestimonialApi;
