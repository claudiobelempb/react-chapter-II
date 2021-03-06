import React, { FormEvent, useState } from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { Box } from "../../components/Box";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Summary } from "../../components/Summary";
import { ModalDefault } from "../../components/ModalDefault";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
// import { formatDateRo, formatValueRo } from "../../utils/utils";
import ImgIncome from "../../assets/images/income.svg";
import ImgOutcome from "../../assets/images/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";
// import ImgTotal from "../../assets/images/total.svg";
// activeColor: "green" | "red"
// const colors = {
//   green: "#33CC95",
//   red: "#E52E4D",
// };
// colors[props.activeColor];
export const Home: React.FC = () => {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] =
    useState(false);

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleNewTransactionOpenModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleNewTransactionCloseModal() {
    setIsNewTransactionOpenModal(false);
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    console.log({ title, category, type, amount });

    await createTransaction({
      title,
      category,
      type,
      amount,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    handleNewTransactionCloseModal();
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
            title={"New transaction"}
            onClick={handleNewTransactionOpenModal}
          />
        </Box>
      </Header>
      <Main garea={"M"}>
        <Summary />
        <ModalDefault
          isOpenModal={isNewTransactionOpenModal}
          isCloseModal={handleNewTransactionCloseModal}
          isLarge={true}
        >
          <Form onSubmit={handleCreateNewTransaction}>
            <h2>Created Transaction</h2>
            <Input
              type={"text"}
              name={"title"}
              placeholder={"T??tulo"}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              type={"number"}
              name={"amount"}
              placeholder={"Valor"}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />

            {/* 
              <Input type={"submit"} name={"Send"} /> 
              option sem props
              className={type === "deposit" ? "active" : ""}
              option com props
              isActive={type === "deposit"}
            */}

            <Box box={2}>
              <Button
                isGreenLight={type === "deposit"}
                type={"button"}
                isIcon={true}
                src={ImgIncome}
                title={"Entrada"}
                onClick={() => {
                  setType("deposit");
                }}
              />
              <Button
                isRedLight={type === "withdraw"}
                type={"button"}
                isIcon={true}
                src={ImgOutcome}
                title={"Saida"}
                onClick={() => {
                  setType("withdraw");
                }}
              />
            </Box>

            <Input
              type={"text"}
              name={"category"}
              placeholder={"Categoria"}
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
            <Button
              type={"submit"}
              isGreen={true}
              title={"Created transaction"}
            />
          </Form>
        </ModalDefault>
      </Main>
      <Footer garea={"F"} title={"FOOTER"}></Footer>
    </LayoutSantoGraal>
  );
};
