import React from "react";
import { Container } from "../Container";
import { Content } from "../Content";
import { ContainerSection } from "./style";

interface ISection {
  children?: React.ReactNode;
  title?: string;
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
  bbottom?: string;
  isPosition?: boolean;
  mtop?: number;
  ptb?: number;
  prl?: number;
  padding?: number;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  isHeight?: boolean;
  height?: number | string;
  width?: number;
}
export const Section: React.FC<ISection> = ({
  children,
  ...props
}: ISection) => {
  return (
    <ContainerSection>
      <Container>
        <Content>
          <h1 className={"font-zero"}>{props.title}</h1>
          {children}
        </Content>
      </Container>
    </ContainerSection>
  );
};
