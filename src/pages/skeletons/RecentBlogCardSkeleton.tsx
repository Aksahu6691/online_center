import CustomCard from '@/components/common/CustomCard';
import { Skeleton } from '@nextui-org/react';

interface IRecentBlogCardSkeletonProps {
	count: number;
}

const RecentBlogCardSkeleton = (props: IRecentBlogCardSkeletonProps) => {
	return [...Array(props.count)].map((_, index) => (
		<CustomCard key={index} className="h-fit mb-4" shadow="md">
			{/* <img src={blog.image} alt={blog.title} className="w-full h-36 object-cover" /> */}
			<Skeleton className="h-36 w-full" />
			<div className="p-4">
				<Skeleton className="h-8 w-full rounded-lg mb-3" />
				<Skeleton className="h-20 w-full rounded-lg my-2" />
				{/* <h2 className="font-bold text-lg text-night-black line-clamp-1">{blog.title}</h2>
        <p className="text-slate-gray mt-2 line-clamp-4">{blog.description}</p> */}
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

export default RecentBlogCardSkeleton;
