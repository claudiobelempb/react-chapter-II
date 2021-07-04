import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

type ITransactionInput = Omit<ITransaction, "id" | "createdAt" | "updatedAt">;

interface ITransactionContext {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

interface ITransactionContextProps {
  children: React.ReactNode;
}

const TransactionsContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

export const TransactionsContextProvider = ({
  children,
}: ITransactionContextProps) => {
  const [transactions, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  async function createTransaction(data: ITransactionInput) {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const { transaction } = response.data;
    setTransaction([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const theContext = useContext(TransactionsContext);
  return theContext;
};
