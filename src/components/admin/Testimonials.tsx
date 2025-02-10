import TestimonialsTable from './tables/TestimonialTables';
import { testimonials } from '@/helpers/data';
import { TESTIMONIAL_TABLE_COLUMNS } from '@/utils/constants';
import { ITestimonialResponseData } from '@/api/testimonial/testimonial.types';

const Testimonials = () => {
	const handleRowDropdownPress = async (
		selectedDropdownAction: React.Key,
		selectedTestimonial: ITestimonialResponseData
	) => {
		if (selectedDropdownAction && selectedTestimonial) {
			console.log('selectedDropdownAction, selectedTestimonial', selectedDropdownAction, selectedTestimonial);
		}
	};

	return (
		<div>
			<TestimonialsTable
				handleRowDropdownPress={handleRowDropdownPress}
				tableRows={testimonials}
				tableColumns={TESTIMONIAL_TABLE_COLUMNS}
			/>
		</div>
	);
};

export default Testimonials;
