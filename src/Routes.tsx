import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router';
import { APP_ROUTES } from './utils/constants';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthenticatedUserLayout from './components/routes/authenticated/AuthenticatedUserLayout';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path={APP_ROUTES.ROOT} element={<Login />} />

				{/* Authenticated routes */}
				<Route
					path={APP_ROUTES.APP.ROOT}
					element={
						// <AuthenticatedRoute>
						<AuthenticatedUserLayout />
						// </AuthenticatedRoute>
					}
				>
					<Route path={APP_ROUTES.APP.HOME} element={<Home />} />
					<Route path={APP_ROUTES.APP.SERVICES} element={<Services />} />
					<Route path={APP_ROUTES.APP.ABOUT} element={<About />} />
					<Route path={APP_ROUTES.APP.CONTACT} element={<Contact />} />
				</Route>
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
