import CustomCard from '@/components/common/CustomCard';
import { Skeleton } from '@nextui-org/react';

const TestimonialCardSkeleton = () => {
	return (
		<CustomCard className="w-[88%] ms-5 h-60" shadow="sm">
			<div className="flex flex-col gap-5 h-full p-5">
				<Skeleton className="h-32 w-full rounded-lg" />
				<div className="flex justify-between w-full">
					<div className="flex flex-col text-start gap-3">
						<Skeleton className="h-7 w-40 rounded-lg" />
						<Skeleton className="h-4 w-40 rounded-lg" />
					</div>
					<Skeleton className="h-14 w-14 rounded-full" />
				</div>
			</div>
		</CustomCard>
	);
};

export default TestimonialCardSkeleton;
