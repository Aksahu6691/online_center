import { Spinner } from '@nextui-org/react';
import useAppStore from '@/store/appStore';

const AuthLoading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const showApiLoader = useAppStore(state => state.isAppLoading);
	// const isUserLoggedIn = useAppStore(state => state.isUserLoggedIn);
	// const verifyLogin = useVerifyLogin();

	// const checkIsAuthenticated = useCallback(async () => {
	// 	await verifyLogin();
	// }, [verifyLogin]);

	// useEffect(() => {
	// 	console.log('isUserLoggedIn2', isUserLoggedIn);
	// 	if (!isUserLoggedIn) {
	// 		checkIsAuthenticated();
	// 	}
	// }, [isUserLoggedIn, checkIsAuthenticated]);

	return (
		<div>
			{showApiLoader && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<Spinner />
				</div>
			)}
			{children}
		</div>
	);
};

export default AuthLoading;
