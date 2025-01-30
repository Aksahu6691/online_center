import { LogoImage } from '@/assets/images';
import CustomAvatar from '../common/CustomAvatar';
import CustomSearchInput from '../common/CustomSearchInput';
import { APP_ROUTES, users } from '@/utils/constants';
import { SearchIcon } from '@/assets/icons';
import { Link, useLocation } from 'react-router';

const Nav = () => {
	const location = useLocation();

	return (
		<nav id="nav" className="flex fixed z-50 left-0 right-0 bg-white pr-10 py-3 shadow-md">
			<div className="ml-3 flex items-center">
				<img src={LogoImage} alt="Logo" width={200} className="hover:opacity-80 transition-opacity" />
			</div>

			<div className="flex w-[40%] justify-center gap-10 items-center">
				<Link
					to={APP_ROUTES.APP.HOME}
					className={`text-gray-700 hover:text-blue-600 transition-colors ${
						location.pathname === APP_ROUTES.APP.HOME ? 'font-bold text-blue-600' : ''
					}`}
				>
					Home
				</Link>
				<Link
					to={APP_ROUTES.APP.SERVICES}
					className={`text-gray-700 hover:text-blue-600 transition-colors ${
						location.pathname === APP_ROUTES.APP.SERVICES ? 'font-bold text-blue-600' : ''
					}`}
				>
					Services
				</Link>
				<Link
					to={APP_ROUTES.APP.ABOUT}
					className={`text-gray-700 hover:text-blue-600 transition-colors ${
						location.pathname === APP_ROUTES.APP.ABOUT ? 'font-bold text-blue-600' : ''
					}`}
				>
					About
				</Link>
				<Link
					to={APP_ROUTES.APP.CONTACT}
					className={`text-gray-700 hover:text-blue-600 transition-colors ${
						location.pathname === APP_ROUTES.APP.CONTACT ? 'font-bold text-blue-600' : ''
					}`}
				>
					Contact
				</Link>
			</div>

			<div className="flex flex-1 gap-8 justify-end items-center">
				<CustomSearchInput items={users} StartContent={<SearchIcon />} placeholder="Search users..." className="w-64" />

				<CustomAvatar src={''} showFallback={true} name={'User Name'} />
			</div>
		</nav>
	);
};

export default Nav;
