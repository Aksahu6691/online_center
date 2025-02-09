import { useState } from 'react';
import CustomButton from '@/components/common/CustomButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import ServicesTable from '@/components/admin/ServicesTable';
import { IServiceResponseData } from '@/api/services/services.types';
import { SERVICES_TABLE_COLUMNS } from '@/utils/constants';
import { services } from '@/helpers/data';
import TestimonialsTable from '@/components/admin/TestimonialTables';
import UsersTable from '@/components/admin/UsersTable';
import BlogsTables from '@/components/admin/BlogsTables';

enum FormTitlesEnum {
	SERVICES = 'Services',
	TESTIMONIALS = 'Testimonials',
	USERS = 'Team Members',
	BLOG = 'Blog'
}

const AdminPanel = () => {
	const [activeBtn, setActiveBtn] = useState<FormTitlesEnum>(FormTitlesEnum.SERVICES);

	const handleRowDropdownPress = async (selectedDropdownAction: React.Key, selectedService: IServiceResponseData) => {
		if (!selectedDropdownAction || !selectedService) return;
		console.log('selectedDropdownAction, selectedService', selectedDropdownAction, selectedService);
	};

	const renderTables = () => {
		switch (activeBtn) {
			case FormTitlesEnum.SERVICES:
				return (
					<ServicesTable
						tableRows={services}
						tableColumns={SERVICES_TABLE_COLUMNS}
						handleRowDropdownPress={handleRowDropdownPress}
					/>
				);
			case FormTitlesEnum.TESTIMONIALS:
				return <TestimonialsTable />;
			case FormTitlesEnum.USERS:
				return <UsersTable />;
			case FormTitlesEnum.BLOG:
				return <BlogsTables />;
			default:
				return null;
		}
	};

	return (
		<ScreenWrapper>
			<section style={{ minHeight: 'calc(100vh - 6rem)' }}>
				<h1 className="text-center text-3xl font-[900] text-night-black mb-4">Admin Panel</h1>
				<div className="flex flex-wrap justify-center items-center gap-4">
					<CustomButton
						size="sm"
						variant={activeBtn === 'Services' ? 'solid' : 'ghost'}
						onPress={() => setActiveBtn(FormTitlesEnum.SERVICES)}
					>
						{FormTitlesEnum.SERVICES}
					</CustomButton>
					<CustomButton
						size="sm"
						variant={activeBtn === 'Testimonials' ? 'solid' : 'ghost'}
						onPress={() => setActiveBtn(FormTitlesEnum.TESTIMONIALS)}
					>
						{FormTitlesEnum.TESTIMONIALS}
					</CustomButton>
					<CustomButton
						size="sm"
						variant={activeBtn === 'Team Members' ? 'solid' : 'ghost'}
						onPress={() => setActiveBtn(FormTitlesEnum.USERS)}
					>
						{FormTitlesEnum.USERS}
					</CustomButton>
					<CustomButton
						size="sm"
						variant={activeBtn === 'Blog' ? 'solid' : 'ghost'}
						onPress={() => setActiveBtn(FormTitlesEnum.BLOG)}
					>
						{FormTitlesEnum.BLOG}
					</CustomButton>
				</div>

				<div>
					{renderTables()}{' '}
					{/* <ServicesTable
						tableColumns={SERVICES_TABLE_COLUMNS}
						tableRows={testData}
						handleRowDropdownPress={handleRowDropdownPress}
					/> */}
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default AdminPanel;
