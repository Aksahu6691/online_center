export interface IBlogResponse {
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
