import { useParams } from 'react-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import CustomCard from '@/components/common/CustomCard';
import useAppNavigate from '@/hooks/useAppNavigate';
import useBlogApi from '@/api/blog/useBlogApi';
import { useCallback, useEffect, useState } from 'react';
import { IBlogResponseData } from '@/api/blog/blog.types';
import RecentBlogCardSkeleton from './skeletons/RecentBlogCardSkeleton';

const BlogView = () => {
	const { blogId } = useParams();
	const navigate = useAppNavigate();
	const { getBlogs, getBlogById } = useBlogApi();

	const [blogData, setBlogData] = useState<IBlogResponseData | null>(null);
	const [resentBlogs, setResentBlogs] = useState<IBlogResponseData[]>([]);
	const [isRecentBlogsSkeletonVisible, setIsRecentBlogsSkeletonVisible] = useState(false);

	const fetchBlog = useCallback(async () => {
		if (!blogId) return;
		const { response, success } = await getBlogById(blogId);
		if (success) {
			setBlogData(response || null);
		}
	}, [getBlogById, blogId]);

	const fetchResentBlogs = useCallback(async () => {
		setIsRecentBlogsSkeletonVisible(true);
		const { response, success } = await getBlogs(2);
		if (success) {
			setResentBlogs(response?.blogs || []);
		}
		setIsRecentBlogsSkeletonVisible(false);
	}, [getBlogs]);

	useEffect(() => {
		fetchBlog();
		fetchResentBlogs();
	}, [fetchBlog, fetchResentBlogs]);

	const renderBlogCards = () => {
		if (isRecentBlogsSkeletonVisible) {
			return <RecentBlogCardSkeleton count={2} />;
		}

		return resentBlogs?.map(blog => (
			<CustomCard
				key={blog.id}
				className="h-fit transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer mb-4"
				shadow="md"
				isPressable={true}
				onPress={() => navigate.toBlogView(blog.id)}
			>
				<img src={blog.image} alt={blog.title} className="w-full h-36 object-cover" />
				<div className="p-4">
					<h2 className="font-bold text-lg text-night-black line-clamp-1">{blog.title}</h2>
					<p className="text-slate-gray mt-2 line-clamp-4">{blog.description}</p>
					<div className="flex items-center mt-4">
						<img src={blog.image} alt="error" className="w-10 h-10 rounded-full" />
						<div className="ml-3">
							<p className="text-sm font-medium">{blog.author?.name}</p>
							<p className="text-xs text-slate-gray">{blog.uploadedDate}</p>
						</div>
					</div>
				</div>
			</CustomCard>
		));
	};

	return (
		<ScreenWrapper>
			<section className="px-8 md:px-16 py-16">
				<div className="mb-10">
					<h1 className="text-night-black font-bold text-4xl">{blogData?.title}</h1>
					<div className="text-slate-gray text-sm font-semibold my-2">
						{blogData?.uploadedDate} | By <span className="underline text-pink-purple">{blogData?.author?.name}</span>
					</div>
				</div>

				<div className="flex flex-wrap justify-between gap-4">
					<div className="w-full md:w-[75%]">
						<div className="space-y-6">
							<img src={blogData?.image} alt={blogData?.title} className="w-full h-72 object-cover" />
							<p className="text-base">{blogData?.description}</p>
						</div>
					</div>

					<div className="w-full md:w-[20%]">{renderBlogCards()}</div>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default BlogView;
