import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import ScreenWrapper from '@/components/ScreenWrapper';

const Blog = () => {
	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Blogs" description="Read Our Resent Blogs" />

			<section className="px-8 md:px-16 py-16">Blog Section Here...</section>
		</ScreenWrapper>
	);
};

export default Blog;
