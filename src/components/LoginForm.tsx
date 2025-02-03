import { Spacer } from '@nextui-org/react';
import { Formik, FormikProps } from 'formik';
import CustomInput from './common/CustomInput';
import useAppNavigate from '@/hooks/useAppNavigate';
import { ValidateLoginForm } from '@/utils/validationSchema';
import CustomButton from './common/CustomButton';
import { ILoginFormSchema } from '@/types/schema.type';
import useAppStore from '@/store/appStore';

const LoginForm = () => {
	const navigation = useAppNavigate();
	const setIsAppLoading = useAppStore(state => state.setIsAppLoading);

	const initialValues: ILoginFormSchema = {
		email: '',
		password: ''
	};

	const handelSubmitValue = (values: ILoginFormSchema) => {
		console.log('values', values);
		navigation.toHome();
		setIsAppLoading(true);
		setTimeout(() => setIsAppLoading(false), 3000);
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
