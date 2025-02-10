import { ICustomDropdownMenuItem, ICustomTableCols, ResponsiveConfig } from '@/types/common.type';

export const APP_ROUTES = {
	ROOT: '/',
	ERROR: '/error',
	LOGIN: '/login',

	APP: {
		ROOT: '/app',
		HOME: '/app/home',
		SERVICES: '/app/services',
		BLOG: {
			BLOG_URL: '/app/blog',
			BLOG_VIEW: (id: string) => `/app/blog/view/${id}`
		},
		ABOUT: '/app/about',
		CONTACT: '/app/contact',
		ADMIN: '/app/admin-panel'
	}
} as const;

export const NAVIGATION_ROUTES = {
	HOME: APP_ROUTES.APP.HOME,
	SERVICES: APP_ROUTES.APP.SERVICES,
	BLOG: APP_ROUTES.APP.BLOG.BLOG_URL,
	ABOUT: APP_ROUTES.APP.ABOUT,
	CONTACT: APP_ROUTES.APP.CONTACT
};

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

export const navBarMenuItems: ICustomDropdownMenuItem[] = [
	{
		key: 'profile',
		title: 'Profile'
	},
	{
		key: 'adminPanel',
		title: 'Admin Panel',
		isHidden: false
	},
	{
		key: 'settings',
		title: 'Settings'
	},
	{
		key: 'help',
		title: 'Help',
		color: 'warning'
	},
	{
		key: 'logout',
		title: 'Logout',
		color: 'danger'
	}
];

export const commonDropDownMenuKey = {
	view: 'view',
	edit: 'edit',
	delete: 'delete'
};

export const ServicesTableCols = {
	SERIAL_NUMBER_ID: 'id',
	IMAGE: 'image',
	TITLE: 'title',
	DESCRIPTION: 'description',
	ACTIONS: 'actions'
};

export const TestimonialTableCols = {
	SERIAL_NUMBER_ID: 'id',
	NAME: 'name',
	DESIGNATION: 'designation',
	MESSAGE: 'message',
	ACTIONS: 'actions'
};

export const UserTableCols = {
	SERIAL_NUMBER_ID: 'id',
	PHOTO: 'photo',
	NAME: 'name',
	MOBILE: 'mobile',
	EMAIL: 'email',
	ROLE: 'role',
	DESIGNATION: 'designation',
	DESCRIPTION: 'description',
	STATUS: 'status',
	ACTIONS: 'actions'
};

export const BlogTableCols = {
	SERIAL_NUMBER_ID: 'id',
	IMAGE: 'image',
	TITLE: 'title',
	DESCRIPTION: 'description',
	UPLOADED_DATE: 'uploadedDate',
	AUTHOR: 'author',
	ACTIONS: 'actions'
};

export const SERVICES_TABLE_COLUMNS: ICustomTableCols[] = [
	{ name: 'S.No', uid: 'id' },
	{ name: 'Service Image', uid: 'image' },
	{ name: 'Service Name', uid: 'serviceName' },
	{ name: 'Description', uid: 'description' },
	{ name: 'Action', uid: 'actions' }
];

export const TESTIMONIAL_TABLE_COLUMNS: ICustomTableCols[] = [
	{ name: 'S.No', uid: 'id' },
	{ name: 'Name', uid: 'name' },
	{ name: 'Designation', uid: 'designation' },
	{ name: 'Message', uid: 'message' },
	{ name: 'Action', uid: 'actions' }
];

export const USER_TABLE_COLUMNS: ICustomTableCols[] = [
	{ name: 'S.No', uid: 'id' },
	{ name: 'Photo', uid: 'photo' },
	{ name: 'Name', uid: 'name' },
	{ name: 'Mobile', uid: 'mobile' },
	{ name: 'Email', uid: 'email' },
	{ name: 'Role', uid: 'role' },
	{ name: 'Designation', uid: 'designation' },
	{ name: 'Description', uid: 'description' },
	{ name: 'Status', uid: 'status' },
	{ name: 'Action', uid: 'actions' }
];

export const BLOG_TABLE_COLUMNS: ICustomTableCols[] = [
	{ name: 'S.No', uid: 'id' },
	{ name: 'Image', uid: 'image' },
	{ name: 'Title', uid: 'title' },
	{ name: 'Description', uid: 'description' },
	{ name: 'Uploaded Date', uid: 'uploadedDate' },
	{ name: 'Author', uid: 'author' },
	{ name: 'Action', uid: 'actions' }
];
