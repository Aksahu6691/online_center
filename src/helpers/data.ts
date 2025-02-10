import { BookLightImage, BookOpenImage } from '@/assets/images';
import { ResponsiveConfig } from '@/types/common.type';

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
		id: '5854225d-a749-4768-a207-9d6e40a96e76',
		image: 'http://localhost:8080/images/image_1738750353860-757002581.jpg',
		title: 'Aadhar & PAN Services',
		description: 'Apply for a new Aadhar card, PAN card, or update existing details quickly and easily.'
	},
	{
		id: 'df2df6ee-42a1-4889-83be-4c87a57b5ca6',
		image: 'http://localhost:8080/images/image_1738750541645-38039183.jpg',
		title: 'Bill Payments',
		description: 'Pay electricity, water, gas, and mobile bills securely from one place.'
	},
	{
		id: '6f25c2ff-91e4-4997-8fe9-2adf365428b8',
		image: 'http://localhost:8080/images/image_1738750577937-654782347.jpeg',
		title: 'Banking Services',
		description: 'Open new bank accounts, deposit/withdraw cash, and access various financial services.'
	},
	{
		id: '37555475-2fb1-440c-a2c2-fbd9cc1c42ed',
		image: 'http://localhost:8080/images/image_1738750608362-192565992.jpg',
		title: 'Government Forms',
		description: 'Apply for birth certificates, caste certificates, ration cards, and more online.'
	},
	{
		id: 'af6cab03-c4eb-4813-a3bf-2beac50a8ae2',
		image: 'http://localhost:8080/images/image_1738750645400-676859049.jpeg',
		title: 'Railway & Bus Tickets',
		description: 'Book train and bus tickets at affordable prices without any hassle.'
	},
	{
		id: '735b88e7-0ba3-482f-864f-cfe625195b3f',
		image: 'http://localhost:8080/images/image_1738750676256-172923170.jpg',
		title: 'Insurance Services',
		description: 'Get life, health, or vehicle insurance at the best rates with quick documentation.'
	},
	{
		id: '16fbee7e-26b2-4304-991a-c065338bd983',
		image: 'http://localhost:8080/images/image_1738750710899-572059998.jpg',
		title: 'Digital Education',
		description: 'Get free online courses and training for digital literacy, and learn how to use the internet safely.'
	},
	{
		id: '72a50c97-8faa-4c45-b5dd-134e14851ca9',
		image: 'http://localhost:8080/images/image_1738750738881-15917745.jpg',
		title: 'Mobile Services',
		description: 'Get mobile recharge, buy new mobile connections, and access other mobile services.'
	}
];

export const testimonials = [
	{
		id: 'd7dd5e3b-f1d9-4eb6-95a4-9668eb3fe8fa',
		name: 'Akash',
		designation: 'Software Engineer',
		message:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias minus aspernatur ut expedita, veniam blanditiis tenetur atque praesentium numquam architecto tempore. Voluptates maiores hic commodi, ullam eius illum dolor voluptatum!'
	},
	{
		id: '9355263a-a00e-49d3-b8db-d8d7c1947107',
		name: 'Amit Sharma',
		designation: 'Business Owner',
		message:
			'The services provided here are outstanding! The staff is very helpful, and the process is smooth. Highly recommended for all CSC services.'
	},
	{
		id: '939f98b5-fc15-4a99-834a-e295649b0e86',
		name: 'Priya Verma',
		designation: 'Freelancer',
		message:
			'Quick and hassle-free service! I got my PAN card and Aadhar update done without any issues. Very professional and efficient team.'
	},
	{
		id: '308e6b9a-e133-45db-8301-24fe3650039d',
		name: 'Rahul Mehta',
		designation: 'Software Engineer',
		message:
			'A great place for digital services. I used their banking and bill payment services, and everything was handled efficiently.'
	},
	{
		id: '8a9d94fd-b8cd-493b-87da-420128881768',
		name: 'Sneha Kapoor',
		designation: 'Student',
		message:
			'I had an amazing experience with their online application services. They guided me throughout the process. Truly a lifesaver!'
	},
	{
		id: '8460866a-75f6-4067-af1a-8c9259507001',
		name: 'Vikram Singh',
		designation: 'Shop Owner',
		message:
			'Very fast and reliable service. The team is knowledgeable and helped me with my GST registration smoothly.'
	},
	{
		id: 'bbeaa2e9-2e07-4782-97ee-88e4b9d8aa02',
		name: 'Test User',
		designation: 'Test designation',
		message: 'Tset description messages'
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

export const teamMembers = [
	{
		id: 'c1344d5d-4c99-426f-8b02-5c4fc2c6151b',
		name: 'Akash Sahu',
		mobile: '7389756691',
		email: 'ak@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738825707481-351590713.jpg',
		role: 'admin',
		designation: 'Software Engineer',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur odio sunt voluptas nam ea nulla veniam amet voluptate excepturi optio, maiores porro eum cupiditate illum nesciunt! Non, labore fugiat?',
		status: true
	},
	{
		id: 'df92a2e6-9d9c-4bf9-a1a3-42560e296682',
		name: 'Ruby Foster',
		mobile: '1234567890',
		email: 'ruby@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738750031461-547724879.jpg',
		role: 'user',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.',
		status: true
	},
	{
		id: 'def83462-9f58-45eb-8852-726a40a4c20f',
		name: 'Luis Oconnell',
		mobile: '1234567891',
		email: 'luis@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738750080130-120159011.jpg',
		role: 'user',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.',
		status: true
	},
	{
		id: 'e540907d-9591-4387-bfbb-58ac05bf746d',
		name: 'Jackie Riggs',
		mobile: '1234567892',
		email: 'jackie@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738750112869-471651663.jpg',
		role: 'user',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.',
		status: true
	},
	{
		id: 'c8b38feb-09f5-40e7-bf65-e874e909d3b2',
		name: 'Alfred Small',
		mobile: '1234567893',
		email: 'alfred@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738750141375-147635015.jpg',
		role: 'user',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.',
		status: true
	},
	{
		id: '20805bc2-5ac1-4f13-b0fd-d57d296d7c6b',
		name: 'Denis Mitchel',
		mobile: '1234567894',
		email: 'denis@gmail.com',
		photo: 'http://localhost:8080/images/photo_1738750168214-14276191.jpg',
		role: 'user',
		designation: 'CEO-FOUNDER',
		description:
			'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.',
		status: true
	}
];

export const blogData = [
	{
		id: '585d5605-c2f9-4c31-a692-7d9e33224e0a',
		title: 'Mastering Web Development in 2023',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751376294-266938749.jpeg',
		uploadedDate: '2025-02-05T10:29:36.301Z',
		author: null
	},
	{
		id: '745f3a65-479d-48cf-b8b5-63dd42ea949c',
		title: 'Designing for Accessibility',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751356317-445980133.jpg',
		uploadedDate: '2025-02-05T10:29:16.321Z',
		author: null
	},
	{
		id: '4a7e36e8-a515-4f8c-982f-e62f6d5f20b3',
		title: 'The Future of E-commerce',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751330798-701228972.jpg',
		uploadedDate: '2025-02-05T10:28:50.801Z',
		author: null
	},
	{
		id: 'aa58546f-2e87-4fda-b775-0eab0d623362',
		title: 'Effective Social Media Marketing Strategies',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751282270-260789412.jpeg',
		uploadedDate: '2025-02-05T10:28:02.283Z',
		author: null
	},
	{
		id: '0f6f28b2-e70f-438b-8fe4-46fe8b863fcf',
		title: 'Understanding the Basics of SEO',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751263190-23814128.jpg',
		uploadedDate: '2025-02-05T10:27:43.198Z',
		author: null
	},
	{
		id: 'c914b938-0cce-4af8-a4d1-893484bea7d1',
		title: 'Top 5 Tools for Web Designers',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		image: 'http://localhost:8080/images/image_1738751211806-375634070.jpg',
		uploadedDate: '2025-02-05T10:26:51.827Z',
		author: null
	}
];
