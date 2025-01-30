import Nav from '@/components/nav/Nav';
import { Outlet } from 'react-router';

const AuthenticatedUserLayout = () => {
	return (
		<div className="min-h-screen w-full bg-[#F6F6F8]">
			<Nav />
			<div className="h-fit w-[calc(100vw - 192px)] xl:w-[calc(100vw - 256px)] ml-48 xl:ml-64 pt-20 xl:pt-20 px-6 xl:px-8 pb-8  scroll-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthenticatedUserLayout;
