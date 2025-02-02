import { responsiveTestimonials, testimonials } from '@/store/data';
import CustomCard from '../common/CustomCard';
import CustomCarousel from '../common/CustomCarousel';
import { QuoteImage, TestimonialsLeftImage, TestimonialsRightImage } from '@/assets/images';

const TestimonialSection = () => {
	const renderTestimonialCard = () => {
		if (!testimonials) return;

		return testimonials.map(testimonial => (
			<CustomCard
				key={testimonial.id}
				className="w-[88%] ms-5 h-60 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
				shadow="sm"
			>
				<div className="flex flex-col items-center justify-center gap-5 h-full p-5 text-center">
					<p className="text-lg italic text-slate-gray">“{testimonial.description}”</p>
					<div className="flex justify-between w-full">
						<div className="flex flex-col text-start">
							<h1 className="font-[900] text-xl text-night-black">{testimonial.name}</h1>
							<p className="font-bold text-pink-purple">{testimonial.designation}</p>
						</div>
						<img src={QuoteImage} alt="error" />
					</div>
				</div>
			</CustomCard>
		));
	};

	return (
		<section
			className="relative py-14 px-16 flex flex-col items-center text-center"
			style={{ minHeight: 'calc(100vh - 6rem)' }}
		>
			<h3 className="text-shadow-gray text-lg font-[500]">TESTIMONIALS</h3>
			<h2 className="text-3xl font-bold text-night-black">
				What They <span className="text-pink-purple">Think</span>
			</h2>

			<div className="w-full py-10 overflow-hidden">
				<CustomCarousel responsive={responsiveTestimonials}>{renderTestimonialCard()}</CustomCarousel>
			</div>

			<img src={TestimonialsLeftImage} alt="error" className="absolute top-0 left-0" />
			<img src={TestimonialsRightImage} alt="error" className="absolute bottom-0 right-0" />
		</section>
	);
};

export default TestimonialSection;
