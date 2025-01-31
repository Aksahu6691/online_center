import { Formik, FormikProps } from 'formik';
import CustomCard from './common/CustomCard';
import CustomInput from './common/CustomInput';
import CustomButton from './common/CustomButton';
import CustomTextarea from './common/CustomTextarea';
import { ValidateContactForm } from '@/utils/validationSchema';
import { IContactFormSchema } from '@/types/schema.type';

interface IContactFormProps {
	onSubmit: (values: IContactFormSchema) => void;
}

const ContactForm = (props: IContactFormProps) => {
	const initialValues: IContactFormSchema = {
		name: '',
		email: '',
		description: ''
	};

	return (
		<CustomCard className="h-full w-full p-6" shadow="lg">
			<h3 className="text-slate-gray text-small">CONTACT US</h3>
			<div className="text-3xl text-night-black font-[900]">
				Say <span className="text-pink-purple">Hello</span>
			</div>
			<p className="italic text-slate-gray my-5">
				Have questions or need assistance? We're here to help! Fill out the form below, and our team will get back to
				you as soon as possible!
			</p>

			<Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={ValidateContactForm}>
				{({ values, handleBlur, handleChange, touched, errors, handleSubmit }: FormikProps<IContactFormSchema>) => (
					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
						<CustomInput
							label=""
							isRequired={true}
							labelPlacement="outside"
							placeholder="Full Name"
							type="text"
							radius="lg"
							variant="faded"
							name="name"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.name}
							isInvalid={!!(touched.name && errors.name)}
							errorMessage={errors.name}
						/>
						<CustomInput
							label=""
							isRequired={true}
							labelPlacement="outside"
							placeholder="Your Email"
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
						<CustomTextarea
							label=""
							placeholder="Your Message"
							labelPlacement="outside"
							labelColor="primary"
							color="primary"
							radius="full"
							variant="faded"
							name="description"
							value={values.description}
							isRequired={true}
							onChange={handleChange}
							onBlur={handleBlur}
							isInvalid={!!(touched.description && errors.description)}
							errorMessage={errors.description}
							Description={<div className="text-end">{values.description.length}/100</div>}
						/>

						{/* Submit Button */}
						<CustomButton type="submit" size="md" buttonRadius="sm" className={'bg-gradient-custom'}>
							Send Message
						</CustomButton>
					</form>
				)}
			</Formik>
		</CustomCard>
	);
};

export default ContactForm;
