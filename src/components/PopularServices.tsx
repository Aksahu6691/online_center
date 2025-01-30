import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomCard from './common/CustomCard';

const PopularServices = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	const services = [
		{
			title: 'Ready Target',
			description: 'Please tell your friends about the best CSS template website that is TemplateMo.'
		},
		{
			title: 'Technology',
			description: 'Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.'
		},
		{
			title: 'Useful Tricks',
			description: 'In non nisi eget magna efficitur ultricies non quis sapien. Pellentesque tellus.'
		},
		{
			title: 'Creative Ideas',
			description: 'Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.'
		}
	];

	return (
		<section className="py-14 px-16 flex flex-col items-center text-center" style={{ minHeight: 'calc(100vh - 6rem)' }}>
			<h3 className="text-shadow-grey text-lg font-[500]">OUR SERVICES</h3>
			<h2 className="text-3xl font-bold text-night-black">
				Provided <span className="text-pink-purple">Services</span>
			</h2>

			<div className="w-full py-20 mt-10 overflow-hidden">
				<Carousel
					swipeable={true}
					draggable={true}
					showDots={true}
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					keyBoardControl={true}
					transitionDuration={500}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
				>
					{services.map((service, index) => (
						<CustomCard key={index} className="w-[85%] h-80">
							<h3 className="text-xl font-bold mb-4">{service.title}</h3>
							<p className="text-sm">{service.description}</p>
						</CustomCard>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default PopularServices;
