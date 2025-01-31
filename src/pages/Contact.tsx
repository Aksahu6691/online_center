import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import ContactForm from '@/components/ContactForm';
import ScreenWrapper from '@/components/ScreenWrapper';

const Contact = () => {
	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Contact Us" description="Say Hello EduWell" />

			<section className="px-16 mb-20">
				<div className="py-14 flex flex-col items-center">
					<h3 className="text-shadow-gray text-lg font-[500]">More info</h3>
					<h2 className="text-3xl font-bold text-night-black">
						Read More <span className="text-pink-purple">Contact Us</span>
					</h2>
				</div>
				<div className="flex items-center justify-center">
					<div className="w-full lg:w-1/2">
						<ContactForm />
					</div>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default Contact;
