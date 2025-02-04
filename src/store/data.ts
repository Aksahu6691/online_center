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

export const blogData = [
	{
		id: '1',
		image:
			'https://images.ctfassets.net/pdf29us7flmy/g4wvzOMpch3fwcFpC7L7F/e91c20b5c20cc4fab54bc0f85098aa48/Office_Workspaces_person_thinking_about_solution_while_staring_at_desktop_screen_-getty21-.jpg?w=720&q=100&fm=jpg',
		title: 'Top 5 Tools for Web Designers',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis nulla vel. Quia beatae nostrum delectus et eligendi doloribus assumenda ab ad sed quos, nobis dolorem itaque? Iste, suscipit commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae beatae voluptatum asperiores nulla tenetur quas itaque id, iste quo culpa suscipit magni explicabo maxime, a architecto assumenda molestias. Cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ea, velit molestiae incidunt atque exercitationem consequuntur pariatur qui voluptates repellat dolorem saepe laudantium voluptas unde id necessitatibus. Veritatis, ratione!',
		author: 'Ruby Foster',
		authorImage: TeamMember01Image,
		uploadedDate: 'May 25, 2023'
	},
	{
		id: '2',
		image:
			'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/60108d20fe7e067d75ce4225_6002086f72b72771ff01e64e_N4bt2VcrF3fpmms28jUwlRD66cbY0iLBHsTO-FeHRNwRM38pRkuWxMLFIUk8xzr_s1vd_D_EFNJ4D3H3Zk-kN9ogJ1aRB8-LWqFg1FXNtVpu4pDASaTo2-HWv2KsGqrT0ZJKAT_H.png',
		title: 'Understanding the Basics of SEO',
		description:
			"Learn about the fundamental principles of SEO and how they can help you improve your website's visibility on search engines. This guide covers keyword research, on-page optimization, and link building strategies.",
		author: 'Luis Oconnell',
		authorImage: TeamMember02Image,
		uploadedDate: 'June 10, 2023'
	},
	{
		id: '3',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5zYT00pwrLq4U_J4A8bn6dX_fhSjnUDX5g&s',
		title: 'Effective Social Media Marketing Strategies',
		description:
			'Explore the best practices for creating engaging content and building a strong social media presence. Discover how to leverage platforms like Facebook, Instagram, and Twitter to connect with your audience.',
		author: 'Jackie Riggs',
		authorImage: TeamMember03Image,
		uploadedDate: 'July 5, 2023'
	},
	{
		id: '4',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HUFy9G_uxD7dhKG5Vfu3QZkfWT5WJoH4Ig&s',
		title: 'The Future of E-commerce',
		description:
			'Stay ahead of the curve by learning about the latest trends and technologies shaping the future of e-commerce. From AI-driven personalization to mobile-first strategies, this article covers it all.',
		author: 'Alfred Small',
		authorImage: TeamMember04Image,
		uploadedDate: 'August 15, 2023'
	},
	{
		id: '5',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LP8jn4hFTTyGQYM-mlf_Z0IfmOyDcq2z4A&s',
		title: 'Designing for Accessibility',
		description:
			'Ensure your website is accessible to everyone by following these design principles. Learn how to create inclusive digital experiences that cater to users with disabilities.',
		author: 'Denis Mitchel',
		authorImage: TeamMember05Image,
		uploadedDate: 'September 1, 2023'
	},
	{
		id: '6',
		image:
			'https://media.istockphoto.com/id/183760144/photo/corporate-modern-office.jpg?s=612x612&w=is&k=20&c=TFUfwR78pVCQh70lrRNLIUgsUVYm-YNs_mxtf-h8DGE=',
		title: 'Mastering Web Development in 2023',
		description:
			"A comprehensive guide to mastering web development in 2023, covering the latest tools, frameworks, and techniques. Whether you're a beginner or an experienced developer, this article has something for you.",
		author: 'Ruby Foster',
		authorImage: TeamMember01Image,
		uploadedDate: 'October 20, 2023'
	}
];
