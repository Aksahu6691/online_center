import React, { createContext, useCallback, useContext } from 'react';
import {
	signIn,
	confirmSignIn,
	getCurrentUser,
	signOut,
	fetchAuthSession,
	type ConfirmSignInOutput,
	type AuthSession,
	type GetCurrentUserOutput,
	type SignInOutput
} from '@aws-amplify/auth';
import { getMessageFromError } from '../utils/utils';
import { IAwsApiResponse } from '../types/common';
import useAppStore from '../store/appStore';

interface IAwsAmplifyAuthContextType {
	getCurrentUserSessions: (forceRefresh?: boolean) => Promise<IAwsApiResponse<AuthSession>>;
	confirmSignInOtp: (otp: string) => Promise<IAwsApiResponse<ConfirmSignInOutput>>;
	generateLoginOtp: (username: string, sendSmsOtp: boolean) => Promise<IAwsApiResponse<SignInOutput>>;
	getCurrentLoggedInUser: () => Promise<IAwsApiResponse<GetCurrentUserOutput>>;
	signOutUser: () => Promise<IAwsApiResponse<void>>;
}
export const AwsAmplifyAuthContext = createContext<IAwsAmplifyAuthContextType | undefined>(undefined);

export const useAwsAmplifyAuthContent = () => {
	const context = useContext(AwsAmplifyAuthContext);

	if (!context) {
		throw new Error('useAwsAmplifyAuthContent must be used within a UserProvider');
	}

	return context;
};

export const AwsAmplifyAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const resetAppStore = useAppStore(state => state.resetAppStore);

	const getCurrentUserSessions = useCallback(
		async (forceRefresh: boolean = false): Promise<IAwsApiResponse<AuthSession>> => {
			try {
				const response = await fetchAuthSession({ forceRefresh });

				return { success: true, response: response };
			} catch (error) {
				return { success: false, errorMsg: getMessageFromError(error) };
			}
		},
		[]
	);

	const getCurrentLoggedInUser = useCallback(async (): Promise<IAwsApiResponse<GetCurrentUserOutput>> => {
		try {
			const response = await getCurrentUser();

			return { success: true, response: response };
		} catch (error) {
			return { success: false, errorMsg: getMessageFromError(error) };
		}
	}, []);

	const generateLoginOtp = useCallback(
		async (username: string, sendSmsOtp = false): Promise<IAwsApiResponse<SignInOutput>> => {
			try {
				const response = await signIn({
					username,
					options: { authFlowType: 'USER_AUTH', preferredChallenge: sendSmsOtp ? 'SMS_OTP' : 'EMAIL_OTP' }
				});

				return { success: true, response };
			} catch (error) {
				return { success: false, errorMsg: getMessageFromError(error) };
			}
		},
		[]
	);

	const confirmSignInOtp = useCallback(async (otp: string): Promise<IAwsApiResponse<ConfirmSignInOutput>> => {
		try {
			const response = await confirmSignIn({ challengeResponse: otp });

			return { success: true, response };
		} catch (error) {
			return { success: false, errorMsg: getMessageFromError(error) };
		}
	}, []);

	const signOutUser = useCallback(async (): Promise<IAwsApiResponse<void>> => {
		try {
			await signOut();

			resetAppStore();

			return { success: true };
		} catch (error) {
			return { success: false, errorMsg: getMessageFromError(error) };
		}
	}, [resetAppStore]);

	return (
		<AwsAmplifyAuthContext.Provider
			value={{
				generateLoginOtp,
				getCurrentLoggedInUser,
				signOutUser,
				getCurrentUserSessions,
				confirmSignInOtp
			}}
		>
			{children}
		</AwsAmplifyAuthContext.Provider>
	);
};
