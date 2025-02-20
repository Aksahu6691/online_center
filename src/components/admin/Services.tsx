import ServicesTable from './tables/ServicesTable';
import { SERVICES_TABLE_COLUMNS } from '@/utils/constants';
import { IServiceResponseData } from '@/api/services/services.types';
import { keepPreviousData, QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import useServicesApi from '@/api/services/useServicesApi';
import { Spinner } from '@nextui-org/react';

const Services = () => {
	const { getServices, deleteService } = useServicesApi();

	const fetchServices = async () => {
		try {
			const { response } = await getServices();
			return response?.services && response.services.length > 0 ? response.services : [];
		} catch (error) {
			console.log(error);
		}
	};

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['services'],
		queryFn: fetchServices,
		gcTime: 1000 * 60 * 5, // 5 minutes
		staleTime: 1000 * 60 * 1, // 1 minutes
		refetchInterval: 1000 * 60 * 1, // 1 minutes
		refetchIntervalInBackground: false,
		placeholderData: keepPreviousData // keepPreviousData will keep the previous data if the query is not re-fetched
	});

	const deleteServiceMutation = useMutation({
		mutationFn: (serviceId: string) => deleteService(serviceId),
		onSuccess: (data, id) => {
			console.log('data, id', data, id);
		}
	});

	const handleRowDropdownPress = (selectedDropdownAction: React.Key, selectedService: IServiceResponseData) => {
		if (selectedDropdownAction && selectedService) {
			if (selectedDropdownAction === 'delete') {
				deleteServiceMutation.mutate(selectedService.id);
			}
		}
	};

	if (isPending) {
		return <Spinner />;
	}

	if (isError) {
		return <p className="text-center text-2xl">{error.message || 'Something went wrong'}</p>;
	}

	return (
		<div>
			<ServicesTable
				tableRows={data || []}
				tableColumns={SERVICES_TABLE_COLUMNS}
				handleRowDropdownPress={handleRowDropdownPress}
			/>
		</div>
	);
};

export default Services;
