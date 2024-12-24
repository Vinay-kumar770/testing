import React from 'react';

interface DataTableProps {
  data: { [key: string]: string | number }[];
  columns: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <table data-testid="data-table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
