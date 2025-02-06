import { useEffect } from 'react';
import useVerifyLogin from '@/hooks/useVerifyLogin';
import useAppStore from '@/store/appStore';

interface IAuthenticatedRouteProps {
	children: React.ReactNode;
}

const AuthenticatedRoute = (children: IAuthenticatedRouteProps) => {
	const { isUserLoggedIn } = useAppStore();
	const verifyLogin = useVerifyLogin();

	useEffect(() => {
		if (!isUserLoggedIn) {
			verifyLogin();
		}
	}, [isUserLoggedIn, verifyLogin]);

	return <>{children}</>;
};

export default AuthenticatedRoute;
