import React, { useEffect } from "react";
import { api } from "../../services/api";

import { TableContainer } from "./style";

interface ITableProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;

  ths?: {
    key: string | number;
    title: string | number;
  }[];

  tds?: {
    key: string | number;
    value: string | number;
  }[];
}

export const Table: React.FC<ITableProps> = ({
  title,
  subtitle,
  tagcolor,
  amount,
  ths,
  tds,
}: ITableProps) => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <TableContainer tagcolor={tagcolor}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title 01</td>
            <td className={"deposit"}>Value 01</td>
            <td>Category 01</td>
            <td>Date 01</td>
          </tr>
          <tr>
            <td>Title 02</td>
            <td className={"withdraw"}> - Value 02</td>
            <td>Category 02</td>
            <td>Date 02</td>
          </tr>
          <tr>
            <td>Title 03</td>
            <td className={"deposit"}>Value 03</td>
            <td>Category 03</td>
            <td>Date 03</td>
          </tr>
        </tbody>
        {/* <tfoot>
        <tr>
          <td>Título</td>
          <td>Preço</td>
          <td>Categoria</td>
          <td>Data</td>
          <td>Ações</td>
        </tr>
      </tfoot> */}
      </table>
    </TableContainer>
  );
};
