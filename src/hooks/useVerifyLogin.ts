import Cookies from 'js-cookie';
import useAuthApi from '@/api/auth/useAuthApi';
import useAppStore from '@/store/appStore';
import showToast from '@/utils/showToast';

const useVerifyLogin = () => {
	const { setIsAppLoading, setAuthenticatedUser, setIsUserLoggedIn, setAccessToken } = useAppStore();
	const { verifyLoginUser } = useAuthApi();

	const verifyLogin = async (): Promise<boolean> => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken) {
			return false;
		}

		setIsAppLoading(true);
		const { response, success, errorMsg } = await verifyLoginUser({ refreshToken });
		setIsAppLoading(false);

		if (success && response) {
			showToast('Login successfully', 'success');
			setAuthenticatedUser(response.user);
			setAccessToken(response.accessToken);
			setIsUserLoggedIn(true);
			Cookies.set('refreshToken', response?.refreshToken, {
				expires: 7, // 7 days
				path: '/',
				secure: true,
				sameSite: 'Strict'
			});
			return true;
		}

		showToast(errorMsg, 'error');
		return false;
	};

	return verifyLogin;
};

export default useVerifyLogin;
