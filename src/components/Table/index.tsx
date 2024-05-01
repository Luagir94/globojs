import React from 'react'

export interface TableProps {
	headers: string[]
	data: string[][]
}

const Table = ({ headers, data }: TableProps) => {
	return (
		<table className="min-w-full divide-y divide-gray-200 ">
			<thead className="bg-gray-50 ">
				<tr>
					{headers.map((header, index) => (
						<th
							key={header + index}
							className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200 ">
				{data.map((row, index) => (
					<tr key={row.toString() + index}>
						{row.map((cell, index) => (
							<td
								key={cell + index}
								className="py-3.5 px-4 text-sm text-gray-500 dark:text-gray-400"
								style={{ width: index === 2 ? '60%' : '20%' }}
							>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
