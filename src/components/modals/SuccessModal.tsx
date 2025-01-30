import { ModalBody } from '@nextui-org/react';
import { SuccessIcon } from '../../assets/icon';
import CustomModalWrapper from '../CustomModalWrapper';

interface ISuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
	message: string;
	hideCloseIcon?: boolean;
}

const SuccessModal = (props: ISuccessModalProps) => {
	const { isOpen, onClose, message, hideCloseIcon = true } = props;
	return (
		<CustomModalWrapper onClose={onClose} isOpen={isOpen} hideCloseIcon={hideCloseIcon}>
			<ModalBody className="flex flex-col justify-between items-center p-12 gap-4 h-full">
				<SuccessIcon />

				<h1 className="font-bold text-2xl text-black">Success</h1>
				<p className="text-center text-black">{message}</p>
			</ModalBody>
		</CustomModalWrapper>
	);
};

export default SuccessModal;
