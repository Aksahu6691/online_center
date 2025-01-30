import CustomModalWrapper from '../CustomModalWrapper';
import { ModalBody } from '@nextui-org/react';
import { DownloadIcon, EyeIconBlue } from '../../assets/icon';

interface IVeiwDocumentsModalProps {
	heading: string;
	documentList: {
		name: string;
		size: string;
		downloadLink: string;
		viewLink?: string;
	}[];
	isOpen: boolean;
	onClose: () => void;
}

const VeiwDocumentsModal = (props: IVeiwDocumentsModalProps) => {
	const { documentList, heading, isOpen, onClose } = props;
	return (
		<CustomModalWrapper onClose={onClose} isOpen={isOpen} className="!min-h-32">
			<ModalBody className="flex flex-col justify-start gap-3 h-fit">
				<h1 className="font-medium text-lg text-midnight mt-3">{heading}</h1>

				<div>
					{documentList.map((doc, index) => (
						<div key={index} className="flex items-center justify-between p-2 border-b-1 mb-2">
							<div className="">
								<p className="text-gunmetal text-sm font-normal">{doc.name}</p>
								<p className="text-gray-400 text-xs font-normal">{doc.size}</p>
							</div>
							<div className="flex gap-3 items-center cursor-pointer">
								<div onClick={() => window.open(doc.downloadLink, '_blank')}>
									<EyeIconBlue />
								</div>

								{doc.viewLink && (
									<div onClick={() => window.open(doc.viewLink, '_blank')}>
										<DownloadIcon />
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</ModalBody>
		</CustomModalWrapper>
	);
};

export default VeiwDocumentsModal;
