import { useEffect } from 'react';
import Cookies from 'js-cookie';
import LoginForm from '@/components/LoginForm';
import ScreenWrapper from '@/components/ScreenWrapper';
import useAppNavigate from '@/hooks/useAppNavigate';

const Login = () => {
	const token = Cookies.get('refreshToken');
	const navigate = useAppNavigate();

	useEffect(() => {
		if (token) {
			navigate.toHome();
		}
	}, [token, navigate]);

	return (
		<ScreenWrapper>
			<LoginForm />
		</ScreenWrapper>
	);
};

export default Login;
