import { useState, useEffect, Key } from 'react';
import { LogoImage } from '@/assets/images';
import CustomAvatar from '../common/CustomAvatar';
import CustomSearchInput from '../common/CustomSearchInput';
import { CloseIcon, MenuIcon, SearchIcon } from '@/assets/icons';
import { Link, useLocation } from 'react-router';
import { cn } from '@nextui-org/react';
import { users } from '@/helpers/data';
import { navBarMenuItems, NAVIGATION_ROUTES } from '@/utils/constants';
import CustomButtonIcon from '../common/CustomButtonIcon';
import CustomDropdownMenu from '../common/CustomDropdownMenu';
import useLogout from '@/hooks/useLogout';
import useAppNavigate from '@/hooks/useAppNavigate';
import useAppStore from '@/store/appStore';

const Nav = () => {
	const { pathname } = useLocation();
	const navigate = useAppNavigate();
	const logout = useLogout();
	const authenticatedUser = useAppStore(state => state.authenticatedUser);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		setIsMenuOpen(false);
	}, [pathname]);

	const handleNavBarMenuAction = (key: Key) => {
		switch (key) {
			case 'logout':
				logout();
				break;
			case 'adminPanel':
				navigate.toAdminPanel();
				break;

			default:
				break;
		}
	};

	const renderDesktopNavigation = () => {
		return Object.entries(NAVIGATION_ROUTES).map(([key, route]) => (
			<Link
				key={key}
				to={route}
				className={cn(
					'hover:text-pink-400 transition-colors text-white',
					pathname === route && 'font-bold text-pink-purple'
				)}
			>
				{key.charAt(0) + key.slice(1).toLowerCase()}
			</Link>
		));
	};

	const renderMobileMenu = () => {
		if (!isMenuOpen) return;

		return (
			<div className="absolute top-full left-0 w-full bg-gradient-custom shadow-md flex flex-col items-center py-5 gap-4 md:hidden">
				{Object.entries(NAVIGATION_ROUTES).map(([key, route]) => (
					<Link
						key={key}
						to={route}
						className={cn(
							'hover:text-pink-400 transition-colors text-white',
							pathname === route && 'font-bold text-pink-purple'
						)}
						onClick={() => setIsMenuOpen(false)}
					>
						{key.charAt(0) + key.slice(1).toLowerCase()}
					</Link>
				))}
				<CustomSearchInput items={users} StartContent={<SearchIcon />} placeholder="Search users..." className="w-64" />
				<CustomDropdownMenu showArrow={false} items={navBarMenuItems} onAction={handleNavBarMenuAction}>
					<div>
						<CustomAvatar
							src=""
							showFallback={true}
							name={authenticatedUser?.name ?? 'User Name'}
							className={{ name: 'text-white', base: 'cursor-pointer' }}
						/>
					</div>
				</CustomDropdownMenu>
			</div>
		);
	};

	return (
		<nav className="fixed z-40 w-full bg-gradient-custom shadow-md py-3 px-6 md:px-10 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<img src={LogoImage} alt="Logo" width={150} className="hover:opacity-80 transition-opacity" />
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex w-[40%] xl:w-[30%] gap-2 justify-between">{renderDesktopNavigation()}</div>

			{/* Search & Avatar */}
			<div className="hidden md:flex gap-2 justify-between items-center w-[36%] 2xl:w-[30%]">
				<CustomSearchInput items={users} StartContent={<SearchIcon />} placeholder="Search users..." className="w-64" />
				<CustomDropdownMenu showArrow={false} items={navBarMenuItems} onAction={handleNavBarMenuAction}>
					<div>
						<CustomAvatar
							src=""
							showFallback={true}
							name={authenticatedUser?.name ?? 'User Name'}
							className={{ name: 'text-white min-w-20', base: 'cursor-pointer' }}
						/>
					</div>
				</CustomDropdownMenu>
			</div>

			{/* Mobile Menu Button */}
			<CustomButtonIcon
				className="md:hidden"
				variant="faded"
				Icon={isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				onPress={() => setIsMenuOpen(!isMenuOpen)}
			/>

			{/* Mobile Menu */}
			{renderMobileMenu()}
		</nav>
	);
};

export default Nav;
