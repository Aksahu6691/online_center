import { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/react';

const AuthLoading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAppLoading, setIsAppLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setIsAppLoading(false), 3000);
	}, []);

	return (
		<div>
			{isAppLoading && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<Spinner />
				</div>
			)}
			{children}
		</div>
	);
};

export default AuthLoading;
