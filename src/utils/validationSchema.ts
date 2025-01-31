import * as Yup from 'yup';

const customEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex =
	/^[A-Za-z][\w\s]*([^\w\s][-_]?[\w\s]*)?$/; /*name must start with alphanumeric (A-Z,a-z) may contain (0-9,_,-) */

export const ValidateLoginForm = Yup.object().shape({
	email: Yup.string().matches(customEmailRegex, 'Invalid email').required('Required'),
	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export const ValidateContactForm = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Name must be between 3 and 50 characters')
		.max(50, 'Name must be between 3 and 50 characters')
		.required('Required')
		.test('is-valid-name', 'Invalid name', value => {
			return nameRegex.test(value);
		}),
	email: Yup.string().matches(customEmailRegex, 'Invalid email').required('Required'),
	description: Yup.string()
		.required('Description is required')
		.min(5, 'Description must be at least 5 characters long')
		.max(100, 'Description must be between 5 and 100 characters')
});
