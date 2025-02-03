import {
	BookLightImage,
	BookOpenImage,
	TeamMember01Image,
	TeamMember02Image,
	TeamMember03Image,
	TeamMember04Image,
	TeamMember05Image
} from '@/assets/images';
import { ResponsiveConfig } from '@/types/commont.type';

export const users = [
	{
		id: 1,
		key: 1,
		name: 'Tony Reichert',
		label: 'Tony Reichert',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png',
		email: 'tony.reichert@example.com'
	},
	{
		id: 2,
		key: 2,
		name: 'Zoey Lang',
		label: 'Zoey Lang',
		role: 'Tech Lead',
		team: 'Development',
		status: 'paused',
		age: '25',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png',
		email: 'zoey.lang@example.com'
	},
	{
		id: 3,
		key: 3,
		name: 'Jane Fisher',
		label: 'Jane Fisher',
		role: 'Sr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png',
		email: 'jane.fisher@example.com'
	},
	{
		id: 4,
		key: 4,
		name: 'William Howard',
		label: 'William Howard',
		role: 'C.M.',
		team: 'Marketing',
		status: 'vacation',
		age: '28',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png',
		email: 'william.howard@example.com'
	},
	{
		id: 5,
		key: 5,
		name: 'Kristen Copper',
		label: 'Kristen Copper',
		role: 'S. Manager',
		team: 'Sales',
		status: 'active',
		age: '24',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png',
		email: 'kristen.cooper@example.com'
	},
	{
		id: 6,
		key: 6,
		name: 'Brian Kim',
		label: 'Brian Kim',
		role: 'P. Manager',
		team: 'Management',
		age: '29',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png',
		email: 'brian.kim@example.com',
		status: 'active'
	},
	{
		id: 7,
		key: 7,
		name: 'Michael Hunt',
		label: 'Michael Hunt',
		role: 'Designer',
		team: 'Design',
		status: 'paused',
		age: '27',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png',
		email: 'michael.hunt@example.com'
	},
	{
		id: 8,
		key: 8,
		name: 'Samantha Brooks',
		label: 'Samantha Brooks',
		role: 'HR Manager',
		team: 'HR',
		status: 'active',
		age: '31',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png',
		email: 'samantha.brooks@example.com'
	},
	{
		id: 9,
		key: 9,
		name: 'Frank Harrison',
		label: 'Frank Harrison',
		role: 'F. Manager',
		team: 'Finance',
		status: 'vacation',
		age: '33',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png',
		email: 'frank.harrison@example.com'
	},
	{
		id: 10,
		key: 10,
		name: 'Emma Adams',
		label: 'Emma Adams',
		role: 'Ops Manager',
		team: 'Operations',
		status: 'active',
		age: '35',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png',
		email: 'emma.adams@example.com'
	},
	{
		id: 11,
		key: 11,
		name: 'Brandon Stevens',
		label: 'Brandon Stevens',
		role: 'Jr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png',
		email: 'brandon.stevens@example.com'
	},
	{
		id: 12,
		key: 12,
		name: 'Megan Richards',
		label: 'Megan Richards',
		role: 'P. Manager',
		team: 'Product',
		status: 'paused',
		age: '28',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png',
		email: 'megan.richards@example.com'
	},
	{
		id: 13,
		key: 13,
		name: 'Oliver Scott',
		label: 'Oliver Scott',
		role: 'S. Manager',
		team: 'Security',
		status: 'active',
		age: '37',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png',
		email: 'oliver.scott@example.com'
	},
	{
		id: 14,
		key: 14,
		name: 'Grace Allen',
		label: 'Grace Allen',
		role: 'M. Specialist',
		team: 'Marketing',
		status: 'active',
		age: '30',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png',
		email: 'grace.allen@example.com'
	},
	{
		id: 15,
		key: 15,
		name: 'Noah Carter',
		label: 'Noah Carter',
		role: 'IT Specialist',
		team: 'I. Technology',
		status: 'paused',
		age: '31',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png',
		email: 'noah.carter@example.com'
	},
	{
		id: 16,
		key: 16,
		name: 'Ava Perez',
		label: 'Ava Perez',
		role: 'Manager',
		team: 'Sales',
		status: 'active',
		age: '29',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png',
		email: 'ava.perez@example.com'
	},
	{
		id: 17,
		key: 17,
		name: 'Liam Johnson',
		label: 'Liam Johnson',
		role: 'Data Analyst',
		team: 'Analysis',
		status: 'active',
		age: '28',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png',
		email: 'liam.johnson@example.com'
	},
	{
		id: 18,
		key: 18,
		name: 'Sophia Taylor',
		label: 'Sophia Taylor',
		role: 'QA Analyst',
		team: 'Testing',
		status: 'active',
		age: '27',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png',
		email: 'sophia.taylor@example.com'
	},
	{
		id: 19,
		key: 19,
		name: 'Lucas Harris',
		label: 'Lucas Harris',
		role: 'Administrator',
		team: 'Information Technology',
		status: 'paused',
		age: '32',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png',
		email: 'lucas.harris@example.com'
	},
	{
		id: 20,
		key: 20,
		name: 'Mia Robinson',
		label: 'Mia Robinson',
		role: 'Coordinator',
		team: 'Operations',
		status: 'active',
		age: '26',
		avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png',
		email: 'mia.robinson@example.com'
	}
];

export const responsiveTestimonials: ResponsiveConfig = {
	extraLarge: {
		breakpoint: { max: 3000, min: 1536 },
		items: 4,
		slidesToSlide: 2
	},
	large: {
		breakpoint: { max: 1536, min: 1280 },
		items: 3,
		slidesToSlide: 2
	},
	medium: {
		breakpoint: { max: 1280, min: 768 },
		items: 2,
		slidesToSlide: 1
	},
	small: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
		slidesToSlide: 1
	}
};

export const services = [
	{
		id: '1',
		title: 'Aadhar & PAN Services',
		description: 'Apply for a new Aadhar card, PAN card, or update existing details quickly and easily.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '2',
		title: 'Bill Payments',
		description: 'Pay electricity, water, gas, and mobile bills securely from one place.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '3',
		title: 'Banking Services',
		description: 'Open new bank accounts, deposit/withdraw cash, and access various financial services.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '4',
		title: 'Government Forms',
		description: 'Apply for birth certificates, caste certificates, ration cards, and more online.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '5',
		title: 'Railway & Bus Tickets',
		description: 'Book train and bus tickets at affordable prices without any hassle.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '6',
		title: 'Insurance Services',
		description: 'Get life, health, or vehicle insurance at the best rates with quick documentation.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '7',
		title: 'Digital Education',
		description: 'Get free online courses and training for digital literacy, and learn how to use the internet safely.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	},
	{
		id: '8',
		title: 'Mobile Services',
		description: 'Get mobile recharge, buy new mobile connections, and access other mobile services.',
		image:
			'https://indirapuramcsc.com/wp-content/uploads/2024/04/Indirapuram-Common-Service-Centre-Blog-Post-02-770x400.jpg'
	}
];

export const testimonials = [
	{
		id: '1',
		name: 'Amit Sharma',
		designation: 'Business Owner',
		description:
			'The services provided here are outstanding! The staff is very helpful, and the process is smooth. Highly recommended for all CSC services.'
	},
	{
		id: '2',
		name: 'Priya Verma',
		designation: 'Freelancer',
		description:
			'Quick and hassle-free service! I got my PAN card and Aadhar update done without any issues. Very professional and efficient team.'
	},
	{
		id: '3',
		name: 'Rahul Mehta',
		designation: 'Software Engineer',
		description:
			'A great place for digital services. I used their banking and bill payment services, and everything was handled efficiently.'
	},
	{
		id: '4',
		name: 'Sneha Kapoor',
		designation: 'Student',
		description:
			'I had an amazing experience with their online application services. They guided me throughout the process. Truly a lifesaver!'
	},
	{
		id: '5',
		name: 'Vikram Singh',
		designation: 'Shop Owner',
		description:
			'Very fast and reliable service. The team is knowledgeable and helped me with my GST registration smoothly.'
	}
];

export const statusBarData = [
	{ id: '1', title: 'Finished Projects', count: 125 },
	{ id: '2', title: 'Years Experience', count: 11 },
	{ id: '3', title: 'Happy Clients', count: 87 },
	{ id: '4', title: 'Awards Won', count: 24 }
];

export const aboutUsCardData = [
	{
		id: '1',
		icon: BookOpenImage,
		title: 'Best Strategy',
		description: 'We implement result-driven strategies and market analysis to ensure business growth and efficiency.'
	},
	{
		id: '2',
		icon: BookLightImage,
		title: 'Creative Ideas',
		description: 'We bring innovative, out-of-the-box solutions to help businesses stand out in a competitive market.'
	}
];

export const responsiveTeamMember: ResponsiveConfig = {
	extraLarge: {
		breakpoint: { max: 3000, min: 1536 },
		items: 5,
		slidesToSlide: 1
	},
	large: {
		breakpoint: { max: 1536, min: 1280 },
		items: 4,
		slidesToSlide: 1
	},
	medium: {
		breakpoint: { max: 1280, min: 768 },
		items: 3,
		slidesToSlide: 1
	},
	small: {
		breakpoint: { max: 768, min: 0 },
		items: 2,
		slidesToSlide: 1
	}
};

export const teamMembers = [
	{
		id: '1',
		photo: TeamMember01Image,
		name: 'Ruby Foster',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.'
	},
	{
		id: '2',
		photo: TeamMember02Image,
		name: 'Luis Oconnell',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.'
	},
	{
		id: '3',
		photo: TeamMember03Image,
		name: 'Jackie Riggs',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.'
	},
	{
		id: '4',
		photo: TeamMember04Image,
		name: 'Alfred Small',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.'
	},
	{
		id: '5',
		photo: TeamMember05Image,
		name: 'Denis Mitchel',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.'
	}
];
