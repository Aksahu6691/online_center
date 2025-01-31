import PopularServices from '@/components/pageSections/PopularServices';
import TestimonialSection from '@/components/pageSections/TestimonialSection';
import WelcomeSection from '@/components/pageSections/WelcomeSection';
import ScreenWrapper from '@/components/ScreenWrapper';

const Home = () => {
	return (
		<ScreenWrapper>
			<WelcomeSection />
			<PopularServices />
			<TestimonialSection />
		</ScreenWrapper>
	);
};

export default Home;
