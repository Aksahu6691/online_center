import { Outlet } from 'react-router';
import Cookies from 'js-cookie';
import Nav from '@/components/nav/Nav';
import FooterSection from '@/components/pageSections/FooterSection';
import useLogout from '@/hooks/useLogout';
import { useEffect } from 'react';

const AuthenticatedUserLayout = () => {
	const token = Cookies.get('refreshToken');
	const logout = useLogout();

	// TODO: Will fix it
	useEffect(() => {
		if (!token) {
			logout();
		}
	}, []);

	return (
		<div className="min-h-screen w-full bg-white">
			<Nav />
			<div className="h-fit pt-20 scroll-auto">
				<Outlet />
			</div>
			<FooterSection />
		</div>
	);
};

export default AuthenticatedUserLayout;
