export interface IBlogResponseData {
	id: string;
	title: string;
	description: string;
	image: string;
	uploadedDate: string;
	author: {
		id: string;
		name: string;
		photo: string;
	} | null;
}

export interface IBlogResponse {
	currentDataSize: number;
	totalDataSize: number;
	totalPages: number;
	currentPage: number;
	hasMore: boolean;
	blogs: IBlogResponseData[];
}
