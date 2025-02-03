import CustomCarousel from '../common/CustomCarousel';
import CustomCard from '../common/CustomCard';
import { services } from '@/store/data';
import { CircleHafImage } from '@/assets/images';

const PopularServices = () => {
	const renderServiceCard = () => {
		if (!services) return;

		return services.map(service => (
			<CustomCard
				key={service.id}
				className="w-[85%] ms-5 h-80 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
				shadow="sm"
			>
				<div className="flex flex-col items-center justify-center gap-3 h-full p-5 text-center">
					<img src={service.image} alt="error" />
					<h3 className="text-xl font-bold mb-4">{service.title}</h3>
					<p className="text-sm text-slate-gray">{service.description}</p>
				</div>
			</CustomCard>
		));
	};

	return (
		<section
			className="py-16 px-16 flex flex-col items-center text-center"
			style={{
				minHeight: 'calc(100vh - 6rem)',
				backgroundImage: `url(${CircleHafImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top left'
			}}
		>
			<h3 className="text-shadow-gray text-lg font-[500]">OUR SERVICES</h3>
			<h2 className="text-3xl font-bold text-night-black">
				Provided <span className="text-pink-purple">Services</span>
			</h2>

			<div className="w-full py-10 overflow-hidden">
				<CustomCarousel>{renderServiceCard()}</CustomCarousel>
			</div>
		</section>
	);
};

export default PopularServices;
