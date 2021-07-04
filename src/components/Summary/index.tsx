import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Section } from "../Section";
import { Article } from "../Article";
import { Box } from "../Box";
import { Card } from "../Card";
import { Table } from "../Table";

import { formatValue } from "../../utils/formatValue";

import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import total from "../../assets/images/total.svg";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  // const totalValue = transactions.reduce((acc, transaction) => {
  //   acc += transaction.amount;
  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "deposit":
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
          break;
        case "withdraw":
          acc.withdraws -= transaction.amount;
          acc.total -= transaction.amount;
          break;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <>
      <Article title={"Article Summary"}>
        <Box box={3}>
          <Card
            icon={income}
            color={"#33CC95"}
            title={"Entrada"}
            value={formatValue(summary.deposits)}
            alt={"income"}
          />
          <Card
            icon={outcome}
            color={"#E52E4D"}
            title={"Saída"}
            value={formatValue(summary.withdraws)}
            alt={"outcome"}
          />
          <Card
            bgColor={"#33CC95"}
            color={"#FFFFFF"}
            icon={total}
            title={"Total"}
            value={formatValue(summary.total)}
            alt={"total"}
          />
        </Box>
      </Article>
      <Section title={"Section Table"}>
        <Box>
          <Table />
        </Box>
      </Section>
    </>
  );
}
