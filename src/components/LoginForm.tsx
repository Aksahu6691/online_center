import { Spacer } from '@nextui-org/react';
import { Formik, FormikProps } from 'formik';
import Cookies from 'js-cookie';
import CustomInput from './common/CustomInput';
import useAppNavigate from '@/hooks/useAppNavigate';
import { ValidateLoginForm } from '@/utils/validationSchema';
import CustomButton from './common/CustomButton';
import { ILoginFormSchema } from '@/types/schema.type';
import useAppStore from '@/store/appStore';
import useAuthApi from '@/api/auth/useAuthApi';
import showToast from '@/utils/showToast';

const LoginForm = () => {
	const navigation = useAppNavigate();
	const { loginUser } = useAuthApi();
	const setIsAppLoading = useAppStore(state => state.setIsAppLoading);
	const setUserDetails = useAppStore(state => state.setUserDetails);

	const initialValues: ILoginFormSchema = {
		email: '',
		password: ''
	};

	const handelSubmitValue = async (values: ILoginFormSchema) => {
		setIsAppLoading(true);
		const { response, success } = await loginUser(values);
		console.log('response', response);
		if (success && response) {
			showToast('Login successfully', 'success');
			setUserDetails(response.user);
			// Will use later
			Cookies.set('access_token', response?.token, {
				expires: 1,
				path: '/',
				secure: true,
				sameSite: 'Strict'
			});
			navigation.toHome();
		}
		setIsAppLoading(false);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<Formik initialValues={initialValues} onSubmit={handelSubmitValue} validationSchema={ValidateLoginForm}>
				{({ values, handleBlur, handleChange, touched, errors, handleSubmit }: FormikProps<ILoginFormSchema>) => (
					<form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
						<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

						<CustomInput
							label="Email"
							isRequired={true}
							labelPlacement="outside"
							placeholder="name@example.com"
							type="email"
							radius="lg"
							variant="faded"
							name="email"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.email}
							isInvalid={!!(touched.email && errors.email)}
							errorMessage={errors.email}
						/>
						<Spacer y={1.5} />
						<CustomInput
							label="Password"
							isRequired={true}
							labelPlacement="outside"
							placeholder="**********"
							type="password"
							radius="lg"
							variant="faded"
							name="password"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.password}
							isInvalid={!!(touched.password && errors.password)}
							errorMessage={errors.password}
						/>
						<Spacer y={2} />

						{/* Submit Button */}
						<CustomButton type="submit">Login</CustomButton>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
