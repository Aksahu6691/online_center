import Cookies from 'js-cookie';
import axios from 'axios';
import useAppStore from '@/store/appStore';
import showToast from '@/utils/showToast';
import { ILoginResponse, IVerifyUserRequestBody } from '@/api/auth/auth.types';
import { IApiResponseData } from '@/types/common.type';
import envConfig from '@/config/env.config';
import { getMessageFromError } from '@/utils/utils';

const useVerifyLogin = () => {
	const { setIsAppLoading, setAuthenticatedUser, setIsUserLoggedIn, setAccessToken } = useAppStore();

	const verifyLoginUser = async (requestBody: IVerifyUserRequestBody): Promise<IApiResponseData<ILoginResponse>> => {
		return axios
			.post(`${envConfig.API_BASE_URL}/user/verify-login`, requestBody)
			.then(res => {
				return {
					success: true,
					response: res?.data?.data || res?.data,
					errorMsg: ''
				};
			})
			.catch(err => {
				return { success: false, errorMsg: getMessageFromError(err?.response?.data?.error ?? err) };
			});
	};

	const verifyLogin = async (): Promise<boolean> => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken) {
			return false;
		}

		setIsAppLoading(true);
		const { response, success, errorMsg } = await verifyLoginUser({ refreshToken });
		console.log('verifyLogin response', response);
		setIsAppLoading(false);

		if (success && response) {
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
