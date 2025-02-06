export interface ILoginResponse {
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
		photo: string;
		role: string;
		designation: string;
		status: string;
	};
}

export interface ILoginRequestBody {
	email: string;
	password: string;
}
