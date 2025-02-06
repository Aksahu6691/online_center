export interface ITestimonialResponseData {
	id: string;
	name: string;
	designation: string;
	message: string;
}

export interface ITestimonialResponse {
	currentDataSize: number;
	totalDataSize: number;
	totalPages: number;
	currentPage: number;
	hasMore: boolean;
	testimonials: ITestimonialResponseData[];
}
