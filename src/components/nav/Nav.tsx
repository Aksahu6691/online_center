import { LogoImage } from '@/assets/images';
import CustomAvatar from '../common/CustomAvatar';
import CustomSearchInput from '../common/CustomSearchInput';
import { APP_ROUTES, users } from '@/utils/constants';
import { SearchIcon } from '@/assets/icons';
import { Link, useLocation } from 'react-router';
import { cn } from '@nextui-org/react';

const Nav = () => {
	const location = useLocation();

	return (
		<nav id="nav" className={'fixed z-50 left-0 right-0 bg-gradient-custom shadow-md py-3 px-10 flex items-center'}>
			<div className="ml-3">
				<img src={LogoImage} alt="Logo" width={200} className={'hover:opacity-80 transition-opacity'} />
			</div>

			<div className={'flex w-[40%] justify-center gap-10 items-center'}>
				{Object.entries(APP_ROUTES.APP).map(
					([key, route]) =>
						key !== 'ROOT' && (
							<Link
								key={key}
								to={route}
								className={cn(
									'hover:text-pink-400 transition-colors text-white',
									location.pathname === route && 'font-bold text-pink-purple'
								)}
							>
								{key.charAt(0) + key.slice(1).toLowerCase()}
							</Link>
						)
				)}
			</div>

			<div className={'flex flex-1 gap-8 justify-end items-center'}>
				<CustomSearchInput
					items={users}
					StartContent={<SearchIcon />}
					placeholder="Search users..."
					className={'w-64'}
				/>
				<CustomAvatar src={''} showFallback={true} name={'User Name'} className={{ name: 'text-white' }} />
			</div>
		</nav>
	);
};

export default Nav;
