import { blogData } from '@/helpers/data';
import { BLOG_TABLE_COLUMNS } from '@/utils/constants';
import { IBlogResponseData } from '@/api/blog/blog.types';
import BlogsTables from './tables/BlogsTables';

const Blogs = () => {
	const handleRowDropdownPress = async (selectedDropdownAction: React.Key, selectedBlog: IBlogResponseData) => {
		if (selectedDropdownAction && selectedBlog) {
			console.log('selectedDropdownAction, selectedBlog', selectedDropdownAction, selectedBlog);
		}
	};

	return (
		<div>
			<BlogsTables
				tableRows={blogData}
				tableColumns={BLOG_TABLE_COLUMNS}
				handleRowDropdownPress={handleRowDropdownPress}
			/>
		</div>
	);
};

export default Blogs;
