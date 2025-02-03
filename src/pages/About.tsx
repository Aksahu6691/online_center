import { AboutLeftImage } from '@/assets/images';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomCard from '@/components/common/CustomCard';
import TeamMemberSection from '@/components/pageSections/TeamMemberSection';
import ScreenWrapper from '@/components/ScreenWrapper';
import { aboutUsCardData } from '@/store/data';

const About = () => {
	const renderAboutUsCard = () => {
		if (!aboutUsCardData) return;
		return aboutUsCardData.map(data => (
			<div key={data.id} className="relative w-full flex my-16">
				<CustomCard shadow="md" className="absolute top-[-36px] left-7 z-10 w-20 h-20">
					<div className="text-pink-purple font-[900] text-4xl text-center w-full h-full flex items-center justify-center">
						<img src={data.icon} alt="error" />
					</div>
				</CustomCard>
				<CustomCard shadow="md" className="w-full p-5 pt-12">
					<div className="text-night-black font-[900] text-xl my-2">{data.title}</div>
					<p className="text-slate-gray">{data.description}</p>
				</CustomCard>
			</div>
		));
	};
	const renderRightContent = () => {
		return (
			<div>
				<div className="flex flex-col">
					<h3 className="text-shadow-gray font-semibold">GET INFO</h3>
					<h2 className="text-3xl font-[900] text-night-black">
						Read More <span className="text-pink-purple">About Us</span>
					</h2>
				</div>
				<div className="text-slate-gray">
					<p className="my-4">
						At Online Center, we are committed to delivering top-notch solutions that empower businesses and
						individuals. Our team of experts works tirelessly to provide innovative and high-quality services that cater
						to your needs.
					</p>
					<p className="my-4">
						With years of experience in the industry, we take pride in our ability to adapt to the latest trends and
						technologies, ensuring that our clients receive nothing but the best.
					</p>
					<p className="my-4">
						We believe in integrity, creativity, and excellence, and our mission is to help you achieve your goals with
						our exceptional services.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{renderAboutUsCard()}</div>
				</div>
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="About Us" description="More About Us" />

			<section className="px-16 py-16">
				<div className="flex flex-wrap justify-between">
					<div className="w-full lg:w-[45%] mb-5">
						<img src={AboutLeftImage} alt="error" />
					</div>
					<div className="w-full lg:w-[45%]">{renderRightContent()}</div>
				</div>
			</section>
			<TeamMemberSection />
		</ScreenWrapper>
	);
};

export default About;
