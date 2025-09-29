import React from 'react';

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  searchTerm?: string;
  searchKey?: string;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, searchTerm, searchKey }) => {
  const filteredData = searchTerm && searchKey
    ? data.filter(item => 
        item[searchKey]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No data found
        </div>
      )}
    </div>
  );
};

export default DataTable;