import React from "react";

// import { ContainerArticle } from "./style";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";

interface IArticle {
  children?: React.ReactNode;
  title?: string;
}

export const Article: React.FC<IArticle> = ({ children, ...props }) => {
  return (
    <Container>
      <Content>
        <article>
          <h2 className={"font-zero"}>{props.title}</h2>
          {children}
        </article>
      </Content>
    </Container>
  );
};
