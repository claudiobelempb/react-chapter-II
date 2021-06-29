import styled from "styled-components";

interface IBrandProps {
  mw?: number;
  height?: string;
  width?: number;
}

export const BrandContainer = styled.div<IBrandProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;

  & h1 {
    font-size: 0;
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
  }
`;

export const BrandContent = styled.a<IBrandProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;

  & h1 {
    font-size: 0;
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
  }
`;
