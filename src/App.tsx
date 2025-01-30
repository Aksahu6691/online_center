import { NextUIProvider } from '@nextui-org/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './components/routes/ErrorPage';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

const App = () => {
	return (
		<NextUIProvider>
			<ErrorBoundary fallback={<ErrorPage />}>
				<Routes />
				<ToastContainer
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick={true}
					rtl={false}
					draggable
				/>
			</ErrorBoundary>
		</NextUIProvider>
	);
};

export default App;
