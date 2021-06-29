// import React, { useState, FormEvent } from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { Box } from "../../components/Box";
// import { Container } from "../../components/Container";
// import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
// import { Container } from "../../components/Container";
// import { Content } from "../../components/Content";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Summary } from "../../components/Summary";
// import { CardList } from "../../components/CardList";
// import { Form } from "../../components/Form";
// import { Input } from "../../components/Input";
// import { ModalDefault } from "../../components/ModalDefault";
// import { formatDateRo, formatValueRo } from "../../utils/utils";
// import ImgIncome from "../../assets/images/income.svg";
// import ImgOutcome from "../../assets/images/outcome.svg";
// import ImgTotal from "../../assets/images/total.svg";

export const Home: React.FC = () => {
  return (
    <LayoutSantoGraal>
      <Header garea={"H"} isbg={true}>
        <Box isp={true} box={2}>
          <Brand link={"/"} alt={"My Logo"} />
          <Button
            jContent={"flex-end"}
            isBgColor={true}
            bgColor={"#33CC95"}
            color={"#FFF"}
            title={"Nova transação"}
            onClick={() => {}}
          />
        </Box>
      </Header>
      <Main garea={"M"} title={"Main"}>
        <Summary />
      </Main>
      <Footer garea={"F"} title={"FOOTER"}></Footer>
    </LayoutSantoGraal>
  );
};
