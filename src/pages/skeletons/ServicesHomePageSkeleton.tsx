import CustomCard from '@/components/common/CustomCard';
import { Skeleton } from '@nextui-org/react';

const ServicesHomePageSkeleton = () => {
	return (
		<CustomCard className="w-[85%] ms-5 h-80" shadow="sm">
			<div className="flex flex-col items-center justify-between gap-3 h-full p-3 text-center">
				<Skeleton className="h-[50%] w-full" />
				<Skeleton className="h-8 w-full rounded-lg mb-3" />
				<Skeleton className="h-14 w-full rounded-lg" />
			</div>
		</CustomCard>
	);
};

export default ServicesHomePageSkeleton;
