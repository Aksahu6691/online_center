import { NextUIProvider } from '@nextui-org/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './components/routes/ErrorPage';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import AuthLoading from './components/auth/AuthLoading';
import { HttpContextProvider } from './context/HttpContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
		<NextUIProvider>
			<ErrorBoundary fallback={<ErrorPage />}>
				<HttpContextProvider>
					<AuthLoading>
						<QueryClientProvider client={queryClient}>
							<Routes />
							<ToastContainer
								autoClose={3000}
								hideProgressBar={false}
								newestOnTop={true}
								closeOnClick={true}
								rtl={false}
								draggable
							/>
						</QueryClientProvider>
					</AuthLoading>
				</HttpContextProvider>
			</ErrorBoundary>
		</NextUIProvider>
	);
};

export default App;
