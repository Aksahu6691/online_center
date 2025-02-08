import { useState } from 'react';
import CustomButton from '@/components/common/CustomButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import ServicesTable from '@/components/admin/ServicesTable';
import { IServiceResponseData } from '@/api/services/services.types';
import { SERVICES_TABLE_COLUMNS } from '@/utils/constants';

const testData = [
	{
		id: '5854225d-a749-4768-a207-9d6e40a96e76',
		image: 'http://localhost:8080/images/image_1738750353860-757002581.jpg',
		title: 'Aadhar & PAN Services',
		description: 'Apply for a new Aadhar card, PAN card, or update existing details quickly and easily.'
	},
	{
		id: 'df2df6ee-42a1-4889-83be-4c87a57b5ca6',
		image: 'http://localhost:8080/images/image_1738750541645-38039183.jpg',
		title: 'Bill Payments',
		description: 'Pay electricity, water, gas, and mobile bills securely from one place.'
	},
	{
		id: '6f25c2ff-91e4-4997-8fe9-2adf365428b8',
		image: 'http://localhost:8080/images/image_1738750577937-654782347.jpeg',
		title: 'Banking Services',
		description: 'Open new bank accounts, deposit/withdraw cash, and access various financial services.'
	},
	{
		id: '37555475-2fb1-440c-a2c2-fbd9cc1c42ed',
		image: 'http://localhost:8080/images/image_1738750608362-192565992.jpg',
		title: 'Government Forms',
		description: 'Apply for birth certificates, caste certificates, ration cards, and more online.'
	},
	{
		id: 'af6cab03-c4eb-4813-a3bf-2beac50a8ae2',
		image: 'http://localhost:8080/images/image_1738750645400-676859049.jpeg',
		title: 'Railway & Bus Tickets',
		description: 'Book train and bus tickets at affordable prices without any hassle.'
	},
	{
		id: '735b88e7-0ba3-482f-864f-cfe625195b3f',
		image: 'http://localhost:8080/images/image_1738750676256-172923170.jpg',
		title: 'Insurance Services',
		description: 'Get life, health, or vehicle insurance at the best rates with quick documentation.'
	},
	{
		id: '16fbee7e-26b2-4304-991a-c065338bd983',
		image: 'http://localhost:8080/images/image_1738750710899-572059998.jpg',
		title: 'Digital Education',
		description: 'Get free online courses and training for digital literacy, and learn how to use the internet safely.'
	},
	{
		id: '72a50c97-8faa-4c45-b5dd-134e14851ca9',
		image: 'http://localhost:8080/images/image_1738750738881-15917745.jpg',
		title: 'Mobile Services',
		description: 'Get mobile recharge, buy new mobile connections, and access other mobile services.'
	}
];

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
					<ServicesTable
						tableColumns={SERVICES_TABLE_COLUMNS}
						tableRows={testData}
						handleRowDropdownPress={handleRowDropdownPress}
					/>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default AdminPanel;
