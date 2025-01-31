import Nav from '@/components/nav/Nav';
import FooterSection from '@/components/pageSections/FooterSection';
import { Outlet } from 'react-router';

const AuthenticatedUserLayout = () => {
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
