import { IServiceResponseData } from '@/api/services/services.types';
import useServicesApi from '@/api/services/useServicesApi';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomCard from '@/components/common/CustomCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useCallback, useEffect, useState } from 'react';
import ServicesCardSkeleton from './skeletons/ServicesCardSkeleton';

const Services = () => {
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
			return <ServicesCardSkeleton count={8} />;
		}

		return servicesData?.map(service => (
			<CustomCard
				key={service.id}
				className="h-80 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-3 cursor-pointer"
				shadow="sm"
			>
				<div className="flex flex-col items-center justify-between gap-3 h-full text-center">
					<img src={service.image} alt="error" className="w-full h-[50%] overflow-hidden" />
					<h3 className="text-xl font-bold mb-4">{service.title}</h3>
					<p className="text-sm text-slate-gray">{service.description}</p>
				</div>
			</CustomCard>
		));
	};

	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Our Service" description="What We Do" />

			<section className="px-8 md:px-16 py-16">
				<div className="py-14 flex flex-col items-center">
					<h3 className="text-shadow-gray text-lg font-[500]">OUR SERVICES</h3>
					<h2 className="text-3xl font-bold text-night-black">
						Provided <span className="text-pink-purple">Services</span>
					</h2>
				</div>
				<div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6">{renderServiceCard()}</div>
			</section>
		</ScreenWrapper>
	);
};

export default Services;
