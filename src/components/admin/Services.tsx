import { services } from '@/helpers/data';
import ServicesTable from './tables/ServicesTable';
import { SERVICES_TABLE_COLUMNS } from '@/utils/constants';
import { IServiceResponseData } from '@/api/services/services.types';

const Services = () => {
	const handleRowDropdownPress = async (selectedDropdownAction: React.Key, selectedService: IServiceResponseData) => {
		if (selectedDropdownAction && selectedService) {
			console.log('selectedDropdownAction, selectedService', selectedDropdownAction, selectedService);
		}
	};

	return (
		<div>
			<ServicesTable
				tableRows={services}
				tableColumns={SERVICES_TABLE_COLUMNS}
				handleRowDropdownPress={handleRowDropdownPress}
			/>
		</div>
	);
};

export default Services;
