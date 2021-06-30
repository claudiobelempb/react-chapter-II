import React, { useState } from "react";

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
import { ModalDefault } from "../../components/ModalDefault";
// import { CardList } from "../../components/CardList";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
// import { formatDateRo, formatValueRo } from "../../utils/utils";
// import ImgIncome from "../../assets/images/income.svg";
// import ImgOutcome from "../../assets/images/outcome.svg";
// import ImgTotal from "../../assets/images/total.svg";

export const Home: React.FC = () => {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] =
    useState(false);

  function handleNewTransactionOpenModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleNewTransactionCloseModal() {
    setIsNewTransactionOpenModal(false);
  }

  return (
    <LayoutSantoGraal>
      <Header garea={"H"} isbg={true}>
        <Box isp={true} box={2}>
          <Brand link={"/"} alt={"My Logo"} />

          <Button
            isSmall={true}
            jContent={"flex-end"}
            isBgColor={true}
            isGreen={true}
            color={"#FFF"}
            title={"Nova transação"}
            onClick={handleNewTransactionOpenModal}
          />
        </Box>
      </Header>
      <Main garea={"M"}>
        <Summary />
        <ModalDefault
          isOpenModal={isNewTransactionOpenModal}
          isCloseModal={handleNewTransactionCloseModal}
        >
          <h2>modal</h2>
          <Form>
            <Input type={"text"} name={"Email"} />
            <Input type={"password"} name={"Senha"} />

            <Button type={"button"} isGreen={true} />
          </Form>
        </ModalDefault>
      </Main>
      <Footer garea={"F"} title={"FOOTER"}></Footer>
    </LayoutSantoGraal>
  );
};
