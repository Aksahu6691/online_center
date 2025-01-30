import { useEffect } from 'react';
import { Spinner } from '@nextui-org/react';
import useAppNavigate from '@/hooks/useAppNavigate';
import ScreenWrapper from '../ScreenWrapper';

const AuthLoading = () => {
	const navigate = useAppNavigate();
	useEffect(() => {
		setTimeout(() => navigate.toRoot(), 3000);
	}, [navigate]);

	return (
		<ScreenWrapper className="flex justify-center items-center h-screen">
			<Spinner />
		</ScreenWrapper>
	);
};

export default AuthLoading;
