import CustomCard from '@/components/common/CustomCard';
import { Skeleton } from '@nextui-org/react';

interface IBlogCardSkeletonProps {
	count: number;
}

const BlogCardSkeleton = (props: IBlogCardSkeletonProps) => {
	return [...Array(props.count)].map((_, index) => (
		<CustomCard key={index} className="h-full" shadow="md">
			<Skeleton className="h-48 w-full" />
			<div className="p-4">
				<Skeleton className="h-8 w-full rounded-lg mb-3" />
				<Skeleton className="h-20 w-full rounded-lg my-2" />
				<div className="flex items-center mt-4">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="ml-3">
						<Skeleton className="h-5 w-40 rounded-lg mb-2" />
						<Skeleton className="h-3 w-36 rounded-lg" />
					</div>
				</div>
			</div>
		</CustomCard>
	));
};

export default BlogCardSkeleton;
