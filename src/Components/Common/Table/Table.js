import React from "react";
import "./Table.scss";

function Table({ rowData, TableHeaders }) {
  return (
    <table>
      <thead>
        <tr>
          {TableHeaders.map((header, key) => {
            return <th key={key}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, key) => {
          return (
            <tr key={key}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
