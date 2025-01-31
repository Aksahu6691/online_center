import { ResponsiveConfig } from '@/types/commont.type';

export const APP_ROUTES = {
	ROOT: '/',
	ERROR: '/error',

	APP: {
		ROOT: '/app',
		HOME: '/app/home',
		SERVICES: '/app/services',
		ABOUT: '/app/about',
		CONTACT: '/app/contact'
	}
} as const;

export const COMMON_ERROR_MESSAGE = 'Something went wrong. Please try again later.';

export const Responsive: ResponsiveConfig = {
	extraLarge: {
		breakpoint: { max: 3000, min: 1536 }, // Extra large screens (e.g., 2K, 4K monitors)
		items: 5, // Number of items to show
		slidesToSlide: 2 // Number of items to slide at a time
	},
	large: {
		breakpoint: { max: 1536, min: 1280 }, // Large screens (e.g., desktops)
		items: 4, // Number of items to show
		slidesToSlide: 2 // Number of items to slide at a time
	},
	medium: {
		breakpoint: { max: 1280, min: 768 }, // Medium screens (e.g., tablets, small laptops)
		items: 3, // Number of items to show
		slidesToSlide: 1 // Number of items to slide at a time
	},
	small: {
		breakpoint: { max: 768, min: 0 }, // Small screens (e.g., mobile devices)
		items: 1, // Number of items to show
		slidesToSlide: 1 // Number of items to slide at a time
	}
};
