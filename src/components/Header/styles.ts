import styled, { css } from "styled-components";

interface IHeaderProps {
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  isbg?: boolean;
  isp?: boolean;
  isml?: boolean;
  bgcolor?: string;
  isColor?: boolean;
  color?: string;
  bbottom?: string;
  width?: number;
  isPaddingTB?: boolean;
  isPaddingRL?: boolean;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  padding?: number;
  ml?: number;
  isPosition?: boolean;
  height?: number;
}

export const HeaderContainer = styled.header<IHeaderProps>`
  display: flex;
  grid-area: ${(props) => (props.garea ? props.garea : "")};
  flex-direction: ${(props) => (props.fdirection ? props.fdirection : "row")};
  justify-content: ${(props) => (props.jcontent ? props.jcontent : "center")};
  align-items: ${(props) => (props.aitems ? props.aitems : "center")};
  // height: ${(props) => (props.height ? props.height : "59")}px;
  background: ${(props) => (props.bgcolor ? props.bgcolor : "transparent")};
  color: ${(props) => props.theme.colors.white};
  width: ${(props) => (props.width ? props.width : "100")}%;
  padding: 2rem 0 9rem;

  & div > h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
  }

  & div > span {
    font-size: 16px;
    line-height: 18px;
  }

  ${(props) =>
    props.isColor &&
    css<IHeaderProps>`
      color: ${(props) =>
        props.color ? props.color : props.theme.colors.white};
    `}

  ${(props) =>
    props.isbg &&
    css<IHeaderProps>`
      background-color: ${(props) =>
        props.bgcolor ? props.bgcolor : props.theme.colors.blue};
    `}
`;
/*
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    border: none;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
*/
