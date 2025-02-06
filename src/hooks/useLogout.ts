import Cookies from 'js-cookie';
import useAppNavigate from '@/hooks/useAppNavigate';
import useAppStore from '@/store/appStore';

const useLogout = () => {
	const navigate = useAppNavigate();
	const { setAuthenticatedUser, setIsUserLoggedIn, setAccessToken } = useAppStore();

	const logout = () => {
		setAccessToken('');
		setIsUserLoggedIn(false);
		setAuthenticatedUser(undefined);
		Cookies.remove('refreshToken', { path: '/' });
		navigate.toRoot();
	};

	return logout;
};

export default useLogout;
