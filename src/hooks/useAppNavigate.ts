import { useNavigate, type NavigateOptions } from 'react-router';
import { APP_ROUTES } from '../utils/constants';
import { useMemo } from 'react';

const useAppNavigate = () => {
	const navigate = useNavigate();

	const { ROOT, ERROR, APP } = APP_ROUTES;

	const typeSafeNavigate = useMemo(
		() => ({
			to: (path: string, option?: NavigateOptions) => navigate(path, option),
			goBack: (level = -1) => navigate(level),
			toError: (option?: NavigateOptions) => navigate(ERROR, option),

			// Unauthenticated routes
			toRoot: (option?: NavigateOptions) => navigate(ROOT, option),

			// Authenticated routes
			toHome: (option?: NavigateOptions) => navigate(APP.HOME, option),
			toServices: (option?: NavigateOptions) => navigate(APP.SERVICES, option),
			toAbout: (option?: NavigateOptions) => navigate(APP.ABOUT, option),
			toContact: (option?: NavigateOptions) => navigate(APP.CONTACT, option)
		}),
		[navigate, ERROR, ROOT, APP]
	);

	return typeSafeNavigate;
};

export default useAppNavigate;
