import useAppNavigate from '@/hooks/useAppNavigate';
import { useEffect } from 'react';

interface IAuthenticatedRouteProps {
	children: React.ReactNode;
}

const AuthenticatedRoute = (children: IAuthenticatedRouteProps) => {
	const navigate = useAppNavigate();

	useEffect(() => {
		navigate.toHome({ replace: true });
	}, [navigate]);

	return <>{children}</>;
};

export default AuthenticatedRoute;
