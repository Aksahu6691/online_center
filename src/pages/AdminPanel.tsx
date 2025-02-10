import { useState } from 'react';
import CustomButton from '@/components/common/CustomButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import Services from '@/components/admin/services';
import Testimonials from '@/components/admin/Testimonials';
import Users from '@/components/admin/Users';
import Blogs from '@/components/admin/Blogs';
import { FormTitlesEnum } from '@/types/enum';

const COMPONENT_MAP = {
	[FormTitlesEnum.SERVICES]: Services,
	[FormTitlesEnum.TESTIMONIALS]: Testimonials,
	[FormTitlesEnum.USERS]: Users,
	[FormTitlesEnum.BLOG]: Blogs
};

const AdminPanel = () => {
	const [activeBtn, setActiveBtn] = useState<FormTitlesEnum>(FormTitlesEnum.SERVICES);

	const ActiveComponent = COMPONENT_MAP[activeBtn];

	const renderButtonTabs = () => {
		return Object.values(FormTitlesEnum).map(title => (
			<CustomButton
				key={title}
				size="sm"
				variant={activeBtn === title ? 'solid' : 'ghost'}
				onPress={() => setActiveBtn(title)}
			>
				{title}
			</CustomButton>
		));
	};

	return (
		<ScreenWrapper>
			<section style={{ minHeight: 'calc(100vh - 6rem)' }}>
				<h1 className="text-center text-3xl font-[900] text-night-black mb-4">Admin Panel</h1>
				<div className="flex flex-wrap justify-center items-center gap-4">{renderButtonTabs()}</div>
				<div>{ActiveComponent && <ActiveComponent />}</div>
			</section>
		</ScreenWrapper>
	);
};

export default AdminPanel;
