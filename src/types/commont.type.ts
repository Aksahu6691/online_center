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
