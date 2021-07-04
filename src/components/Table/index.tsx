import { useTransactions } from "../../hooks/useTransactions";
import { formatValue } from "../../utils/formatValue";
import { formatDate } from "../../utils/fromatDate";

import { TableContainer } from "./style";

interface ITableProps {
  header?: string;
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
  header,
  subtitle,
  tagcolor,
  amount,
  ths,
  tds,
}: ITableProps) => {
  const { transactions } = useTransactions();
  return (
    <TableContainer tagcolor={tagcolor}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Created</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw" ? " - " : ""}
                  {formatValue(transaction.amount)}
                </td>
                <td>{transaction.type}</td>
                <td>{formatDate(transaction.createdAt)}</td>
                <td>{formatDate(transaction.updatedAt)}</td>
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
