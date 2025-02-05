import CustomCard from '@/components/common/CustomCard';
import { Skeleton } from '@nextui-org/react';

interface IServiceCardSkeletonProps {
	count: number;
}

const ServicesCardSkeleton = (props: IServiceCardSkeletonProps) => {
	return [...Array(props.count)].map((_, index) => (
		<CustomCard key={index} className="h-80 p-3" shadow="sm">
			<div className="flex flex-col items-center justify-between gap-3 h-full text-center">
				<Skeleton className="h-[50%] w-full" />
				<Skeleton className="h-8 w-full rounded-lg mb-3" />
				<Skeleton className="h-14 w-full rounded-lg" />
			</div>
		</CustomCard>
	));
};

export default ServicesCardSkeleton;
