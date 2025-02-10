import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { MoreDots } from '@/assets/icons';
import { ICustomDropdownMenuItem, ICustomTableCols } from '@/types/common.type';
import CustomEllipsisContainer from '../../common/CustomEllipsisContainer';
import CustomDropdownMenu from '../../common/CustomDropdownMenu';
import CustomCard from '../../common/CustomCard';
import { commonDropDownMenuKey, TestimonialTableCols } from '@/utils/constants';
import { ITestimonialResponseData } from '@/api/testimonial/testimonial.types';

type ContentPlacementType = 'inside' | 'outside';
interface ICustomTable {
	tableColumns: ICustomTableCols[] | [];
	tableRows: ITestimonialResponseData[] | [];
	TopContent?: React.ReactNode;
	topContentPlacement?: ContentPlacementType;
	BottomContent?: React.ReactNode;
	bottomContentPlacement?: ContentPlacementType;
	emptyContent?: string | React.ReactNode;
	handleRowDropdownPress: (selectedDropdownKey: React.Key, selectedTestimonial: ITestimonialResponseData) => void;
}

const TestimonialsTable = (props: ICustomTable) => {
	const {
		tableColumns = [],
		tableRows = [],
		TopContent,
		topContentPlacement,
		BottomContent,
		bottomContentPlacement,
		emptyContent = 'No results found',
		handleRowDropdownPress
	} = props;

	const renderCell = (row: ITestimonialResponseData, rowIndex: number, columnKey: React.Key) => {
		const accountTableActionsItems: ICustomDropdownMenuItem[] = [
			{ key: commonDropDownMenuKey.view, title: 'View' },
			{ key: commonDropDownMenuKey.edit, title: 'Edit' },
			{ key: commonDropDownMenuKey.delete, title: 'Delete' }
		];

		switch (columnKey) {
			case TestimonialTableCols.SERIAL_NUMBER_ID:
				return <div className="font-semibold">{rowIndex + 1}.</div>;
			case TestimonialTableCols.NAME:
				return <CustomEllipsisContainer text={row.name} />;
			case TestimonialTableCols.DESIGNATION:
				return <CustomEllipsisContainer text={row.designation} />;
			case TestimonialTableCols.MESSAGE:
				return <CustomEllipsisContainer text={row.message} />;

			case TestimonialTableCols.ACTIONS:
				return (
					<CustomDropdownMenu
						showArrow={false}
						items={accountTableActionsItems}
						onAction={key => handleRowDropdownPress(key, row)}
					>
						<div className="p-4 z-20">
							<MoreDots />
						</div>
					</CustomDropdownMenu>
				);
		}
	};
	return (
		<CustomCard className="my-4">
			<Table
				aria-label="Testimonial table"
				topContent={TopContent}
				topContentPlacement={topContentPlacement}
				bottomContent={BottomContent}
				bottomContentPlacement={bottomContentPlacement}
				removeWrapper={true}
				selectionMode="single"
				classNames={{
					table: ['bg-white border border-light-gray rounded-xl my-6 shadow'],
					thead: ['border-b p-2 border-light-gray'],
					th: ['bg-white', 'h-16'],
					tbody: ['bg-white', 'my-4', 'py-2'],
					td: ['text-[#6C6C73]', 'cursor-pointer']
				}}
			>
				<TableHeader columns={tableColumns}>
					{column => (
						<TableColumn key={column.uid}>
							<div className="text-light-black text-sm font-medium whitespace-normal w-fit">{column.name}</div>
						</TableColumn>
					)}
				</TableHeader>
				<TableBody emptyContent={emptyContent}>
					{tableRows.map((eachTableRow, rowIndex) => {
						return (
							<TableRow
								key={eachTableRow.id}
								onClick={() => handleRowDropdownPress(commonDropDownMenuKey.view, eachTableRow)}
							>
								{columnKey => <TableCell>{renderCell(eachTableRow, rowIndex, columnKey)}</TableCell>}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</CustomCard>
	);
};
export default TestimonialsTable;
