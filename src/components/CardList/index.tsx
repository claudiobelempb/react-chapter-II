import React from "react";
import { Box } from "../Box";
import { CardListContainer } from "./style";

interface ICardListProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;
}

export const CardList: React.FC<ICardListProps> = ({
  title,
  subtitle,
  tagcolor,
  amount,
}: ICardListProps) => {
  return (
    <>
      <CardListContainer tagcolor={tagcolor}>
        <Box box={2} aitems={"flex-start"}>
          <Box>
            <div className={"title"}>{title ? title : "Title"}</div>
            <div className={"sub_title"}>
              {subtitle ? subtitle : "Sub title"}
            </div>
          </Box>
          <div className={"value"}>{amount ? amount : "100.00"}</div>
        </Box>
      </CardListContainer>
    </>
  );
};
