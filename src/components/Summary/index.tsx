import { Section } from "../Section";
import { Article } from "../Article";
import { Box } from "../Box";
import { Card } from "../Card";
// import { CardList } from "../CardList";
import { Table } from "../Table";

import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import total from "../../assets/images/total.svg";

export function Summary() {
  return (
    <>
      <Article title={"Article Summary"}>
        <Box box={3}>
          <Card
            icon={income}
            title={"Entrada"}
            value={"17.00,00"}
            alt={"income"}
          />
          <Card
            icon={outcome}
            title={"Saída"}
            value={"1.259,00"}
            alt={"outcome"}
          />
          <Card
            bgColor={"#33CC95"}
            color={"#FFFFFF"}
            icon={total}
            title={"Total"}
            value={"16.141,00"}
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
