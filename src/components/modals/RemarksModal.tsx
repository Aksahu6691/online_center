import { ModalBody, ModalFooter } from '@nextui-org/react';
import CustomModalWrapper from '../CustomModalWrapper';
import CustomButton from '../CustomButton';
import CustomTextarea from '../CustomTextarea';
import { useState } from 'react';

interface IRemarksModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (text: string) => void;
	isSaveDisabled?: boolean;
	isCloseDisabled?: boolean;
	isDisabled?: boolean;
	value?: string;
	label?: string;
}

const RemarksModal = (props: IRemarksModalProps) => {
	const [text, setText] = useState<string>('');
	const { isOpen, onClose, onSave, isCloseDisabled, isSaveDisabled, isDisabled = false, label = 'Remark' } = props;
	return (
		<CustomModalWrapper onClose={onClose} isOpen={isOpen} className="!min-h-32">
			<ModalBody className="flex flex-col justify-start gap-3 h-fit">
				<h1 className="font-medium text-lg text-midnight mt-3">Remark</h1>

				{!isDisabled ? (
					<>
						<CustomTextarea
							label={label}
							placeholder="Enter Remark"
							labelPlacement="outside"
							color="primary"
							radius="full"
							variant="faded"
							value={text}
							onChange={e => setText(e.target.value)}
						/>

						<ModalFooter className="px-0">
							<CustomButton buttonRadius="full" variant="bordered" onPress={onClose} isDisabled={isCloseDisabled}>
								Cancel
							</CustomButton>
							<CustomButton
								buttonRadius="full"
								onPress={() => {
									onSave(text);
									setText('');
								}}
								isDisabled={isSaveDisabled}
							>
								Save
							</CustomButton>
						</ModalFooter>
					</>
				) : (
					<>
						<p className="text-xs font-normal text-steel-gray">{label}</p>
						<p className="text-md font-normal text-gunmetal">{props.value}</p>
					</>
				)}
			</ModalBody>
		</CustomModalWrapper>
	);
};

export default RemarksModal;
