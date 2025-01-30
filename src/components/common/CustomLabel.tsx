import { cn } from '@nextui-org/react';

interface ICustomLabelProps {
	label: string;
	value?: string | null;
	vertical?: boolean;
	containerClassName?: string;
	labelClassName?: string;
	valueClassName?: string;
	onClick?: () => void;
}

const CustomLabel = (props: ICustomLabelProps) => {
	const { label, value, containerClassName, labelClassName, valueClassName, vertical = true } = props;

	return (
		<div className={cn('flex', { 'flex-col': vertical }, containerClassName)}>
			<label className={cn('text-slate-grey font-normal text-xs capitalize', labelClassName)}>{label}</label>

			<span onClick={props.onClick} className={cn('text-gunmetal font-medium text-base', valueClassName)}>
				{value || '-'}
			</span>
		</div>
	);
};

export default CustomLabel;
