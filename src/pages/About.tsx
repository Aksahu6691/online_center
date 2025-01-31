import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import ScreenWrapper from '@/components/ScreenWrapper';

const About = () => {
	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="About Us" description="More About Us" />

			<section className="px-16 mb-20">
				<div className="py-14 flex flex-col items-center">
					<h3 className="text-shadow-gray text-lg font-[500]">Get info</h3>
					<h2 className="text-3xl font-bold text-night-black">
						Read More <span className="text-pink-purple">About Us</span>
					</h2>
				</div>
				<div>Data here</div>
			</section>
		</ScreenWrapper>
	);
};

export default About;
