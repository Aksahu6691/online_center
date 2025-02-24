import { useCallback, useEffect, useState } from 'react';
import CustomCarousel from '../common/CustomCarousel';
import CustomCard from '../common/CustomCard';
import { CircleHafImage } from '@/assets/images';
import useServicesApi from '@/api/services/useServicesApi';
import { IServiceResponseData } from '@/api/services/services.types';
import ServicesHomePageSkeleton from '@/pages/skeletons/ServicesHomePageSkeleton';

const PopularServices = () => {
	// INFO: APIs
	const { getServices } = useServicesApi();

	// INFO: Local States
	const [servicesData, setServicesData] = useState<IServiceResponseData[]>([]);
	const [isSkeletonVisible, setIsSkeletonVisible] = useState(false);

	// INFO: Effects
	const fetchServices = useCallback(async () => {
		setIsSkeletonVisible(true);
		const { response, success } = await getServices();
		if (success) {
			setServicesData(response?.services || []);
		}
		setIsSkeletonVisible(false);
	}, [getServices]);

	useEffect(() => {
		fetchServices();
	}, [fetchServices]);

	// INFO: Render Functions
	const renderServiceCard = () => {
		if (isSkeletonVisible) {
			return [...Array(8)].map((_, index) => <ServicesHomePageSkeleton key={index} />);
		}

		return servicesData?.map(service => (
			<CustomCard
				key={service.id}
				className="w-[85%] ms-5 h-80 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
				shadow="sm"
			>
				<div className="flex flex-col items-center justify-between gap-3 h-full p-3 text-center">
					<img src={service.image} alt="error" className="w-full h-[50%] overflow-hidden" />
					<h3 className="text-xl font-bold mb-3">{service.title}</h3>
					<p className="text-sm text-slate-gray">{service.description}</p>
				</div>
			</CustomCard>
		));
	};

	return (
		<section
			className="py-16 px-8 md:px-16 flex flex-col items-center text-center"
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
