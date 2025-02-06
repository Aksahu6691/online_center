export interface IServiceResponseData {
	id: string;
	image: string;
	title: string;
	description: string;
}

export interface IServiceResponse {
	currentDataSize: number;
	totalDataSize: number;
	totalPages: number;
	currentPage: number;
	hasMore: boolean;
	services: IServiceResponseData[];
}
