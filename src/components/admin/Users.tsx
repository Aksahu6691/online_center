import { USER_TABLE_COLUMNS } from '@/utils/constants';
import UsersTable from './tables/UsersTable';
import { IUserResponse } from '@/api/user/user.types';
import { teamMembers } from '@/helpers/data';

const Users = () => {
	const handleRowDropdownPress = async (selectedDropdownAction: React.Key, selectedUser: IUserResponse) => {
		if (selectedDropdownAction && selectedUser) {
			console.log('selectedDropdownAction, selectedUser', selectedDropdownAction, selectedUser);
		}
	};

	return (
		<div>
			<UsersTable
				tableRows={teamMembers}
				tableColumns={USER_TABLE_COLUMNS}
				handleRowDropdownPress={handleRowDropdownPress}
			/>
		</div>
	);
};

export default Users;
