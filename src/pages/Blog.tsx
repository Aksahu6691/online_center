import { useCallback, useEffect, useState } from 'react';
import { IBlogResponseData } from '@/api/blog/blog.types';
import useBlogApi from '@/api/blog/useBlogApi';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomCard from '@/components/common/CustomCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import useAppNavigate from '@/hooks/useAppNavigate';
import BlogCardSkeleton from './skeletons/BlogCardSkeleton';

const Blog = () => {
	// INFO: Constant

	// INFO: APIs
	const { getBlogs } = useBlogApi();

	// INFO: Global States
	const navigate = useAppNavigate();

	// INFO: Local States
	const [blogData, setBlogData] = useState<IBlogResponseData[]>([]);
	const [isSkeletonVisible, setIsSkeletonVisible] = useState(false);

	// INFO: Effects
	const fetchBlog = useCallback(async () => {
		setIsSkeletonVisible(true);
		const { response, success } = await getBlogs();
		if (success) {
			setBlogData(response?.blogs || []);
		}
		setIsSkeletonVisible(false);
	}, [getBlogs]);

	useEffect(() => {
		fetchBlog();
	}, [fetchBlog]);

	// INFO: Handlers

	// INFO: Render Functions
	const renderBlogCards = () => {
		if (isSkeletonVisible) {
			return <BlogCardSkeleton count={10} />;
		}

		return blogData?.map(blog => (
			<CustomCard
				key={blog.id}
				className="h-full transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
				shadow="md"
				isPressable={true}
				onPress={() => navigate.toBlogView(blog.id)}
			>
				<img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
				<div className="p-4">
					<h2 className="font-bold text-lg text-night-black line-clamp-1">{blog.title}</h2>
					<p className="text-slate-gray mt-2 line-clamp-4">{blog.description}</p>
					<div className="flex items-center mt-4">
						<img src={blog.image} alt="error" className="w-10 h-10 rounded-full" />
						<div className="ml-3">
							<p className="text-sm font-medium">{blog?.author?.name}</p>
							<p className="text-xs text-slate-gray">{blog.uploadedDate}</p>
						</div>
					</div>
				</div>
			</CustomCard>
		));
	};

	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Blogs" description="Read Our Resent Blogs" />

			<section className="px-8 md:px-16 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">{renderBlogCards()}</div>
			</section>
		</ScreenWrapper>
	);
};

export default Blog;
