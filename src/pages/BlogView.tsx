import { useParams } from 'react-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import { blogData } from '@/store/data';
import CustomCard from '@/components/common/CustomCard';
import useAppNavigate from '@/hooks/useAppNavigate';

const BlogView = () => {
	const { blogId } = useParams();
	const navigate = useAppNavigate();
	console.log('blogId', blogId);

	return (
		<ScreenWrapper>
			<section className="px-8 md:px-16 py-16">
				<div className="mb-10">
					<h1 className="text-night-black font-bold text-4xl">{blogData[0].title}</h1>
					<div className="text-slate-gray text-sm font-semibold my-2">
						{blogData[0].uploadedDate} | By <span className="underline text-pink-purple">{blogData[0].author}</span>
					</div>
				</div>

				<div className="flex flex-wrap justify-between gap-4">
					<div className="w-full md:w-[75%]">
						<div className="space-y-6">
							<img src={blogData[0].image} alt={blogData[0].title} className="w-full h-72 object-cover" />
							<p className="text-base">{blogData[0].description}</p>
						</div>
					</div>

					<div className="w-full md:w-[20%]">
						{blogData.map(blog => (
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
										<img src={blog.authorImage} alt={blog.author} className="w-10 h-10 rounded-full" />
										<div className="ml-3">
											<p className="text-sm font-medium">{blog.author}</p>
											<p className="text-xs text-slate-gray">{blog.uploadedDate}</p>
										</div>
									</div>
								</div>
							</CustomCard>
						))}
					</div>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default BlogView;
