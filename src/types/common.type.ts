import { ReactNode } from 'react';

export interface ISelectDropdownOptions {
	label: string;
	value: string;
}

export interface ICustomDropdownMenuItem {
	key: string;
	title: string;
	isHidden?: boolean;
	StartContent?: ReactNode;
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	description?: string;
	href?: string;
	isReadOnly?: boolean;
}

export interface ResponsiveConfig {
	[key: string]: {
		breakpoint: { max: number; min: number };
		items: number;
		slidesToSlide: number;
	};
}

export interface IResponse<T> {
	currentDataSize?: number;
	totalDataSize?: number;
	totalPages?: number;
	currentPage?: number;
	hasMore?: boolean;
	data: T | null;
}

export interface IApiResponseData<T> {
	success: boolean;
	errorMsg: string;
	response?: T | null;
}

export interface IGlobalUserDetails {
	id: string;
	name: string;
	email: string;
	photo: string;
	role: string;
	designation: string;
	status: string;
}

export interface ICustomTableCols {
	name: string;
	uid: string;
}
