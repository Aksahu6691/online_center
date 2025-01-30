import { useNavigate } from 'react-router';
import { APP_ROUTES } from '@/utils/constants';
import { BannerRightImage } from '@/assets/images';
import CustomButton from './common/CustomButton';

const WelcomeSection = () => {
	const navigate = useNavigate();
	return (
		<section
			className="flex flex-row flex-wrap items-center justify-between px-16"
			style={{ minHeight: 'calc(100vh - 6rem)' }}
		>
			<div className="w-[45%]">
				<h6 className="text-shadow-grey text-lg font-[500]">Welcome to our portal</h6>
				<h2 className="text-[64px] text-night-black font-[900]">
					Welcome to Your Digital <span className="text-pink-purple">Seva Center!</span>
				</h2>
				<div className="mt-5">
					<CustomButton
						size="lg"
						buttonRadius="sm"
						className={'bg-gradient-custom'}
						onPress={() => navigate(APP_ROUTES.APP.SERVICES)}
					>
						Explore Services
					</CustomButton>
				</div>
			</div>
			<div className="w-[45%]">
				<img src={BannerRightImage} alt="error" width={500} />
			</div>
		</section>
	);
};

export default WelcomeSection;
