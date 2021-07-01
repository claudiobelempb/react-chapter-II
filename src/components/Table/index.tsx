import React, { useEffect, useState } from "react";
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

interface ITransactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAd: string;
}

export const Table: React.FC<ITableProps> = ({
  title,
  subtitle,
  tagcolor,
  amount,
  ths,
  tds,
}: ITableProps) => {
  const [transactions, setTransaction] = useState<ITransactions[]>([]);
  console.log(transactions);
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransaction(response.data.transactions));
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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.createdAd}</td>
              </tr>
            );
          })}
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
