import styled, { css } from "styled-components";

interface IBoxProps {
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
  width?: string;
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
  box?: number;
}

export const BoxContainerContainer = styled.div<IBoxProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  flex-direction: ${(props) =>
    props.fdirection ? props.fdirection : "column"};
  justify-content: ${(props) => (props.jcontent ? props.jcontent : "center")};
  align-items: ${(props) => (props.aitems ? props.aitems : "center")};
  max-width: 100%;
  height: 100%;
  border-radius: 0.3rem;

  & .title {
    font-size: 0.9rem;
  }

  & .sub-title {
    font-size: 0.7rem;
  }

  ${(props) =>
    props.box &&
    css<IBoxProps>`
      grid-template-columns: repeat(${(props) => props.box}, 1fr);
    `};

  ${(props) =>
    props.isPaddingTB &&
    css<IBoxProps>`
      padding-top: ${(props) => (props.pt ? props.pt : 1)}rem;
      padding-bottom: ${(props) => (props.pb ? props.pb : 1)}rem;
    `};

  ${(props) =>
    props.isPaddingRL &&
    css<IBoxProps>`
      padding-right: ${(props) => (props.pr ? props.pr : 1)}rem;
      padding-left: ${(props) => (props.pl ? props.pl : 1)}rem;
    `};

  ${(props) =>
    props.isPadding &&
    css<IBoxProps>`
    padding-top: ${(props) => (props.pt ? props.pt : 0)}rem;
    padding-bottom: ${(props) => (props.pb ? props.pb : 0)}rem;
    padding-right: ${(props) => (props.pr ? props.pr : 0)}rem;
    pad
  `};

  ${(props) =>
    props.isColor &&
    css<IBoxProps>`
      color: ${(props) =>
        props.color ? props.color : props.theme.colors.white};
    `}

  ${(props) =>
    props.isbg &&
    css<IBoxProps>`
      background-color: ${(props) =>
        props.bgcolor ? props.bgcolor : props.theme.colors.white};
    `}

  ${(props) =>
    props.isp &&
    css<IBoxProps>`
      padding: ${(props) => (props.padding ? props.padding : 0.3)}rem 1rem;
    `}

  ${(props) =>
    props.isml &&
    css<IBoxProps>`
      margin-left: ${(props) => (props.ml ? props.ml : 1)}rem;
    `}

  ${(props) =>
    props.isPosition &&
    css<IBoxProps>`
      position: absolute;
      top: -60px;
    `};

  @media (max-width: 700px) {
    & {
      margin-left: 0;
      /* margin-top: 1rem; */

      ${(props) =>
        props.isp &&
        css<IBoxProps>`
          padding: ${(props) => (props.padding ? props.padding : 0.3)}rem 1rem;
        `}

      ${(props) =>
        props.isml &&
        css<IBoxProps>`
          margin-left: ${(props) => (props.ml ? props.ml : 0)}rem;
        `}

      ${(props) =>
        props.isPosition &&
        css<IBoxProps>`
          position: initial;
          top: 0;
        `};

      ${(props) =>
        props.box &&
        css<IBoxProps>`
          grid-template-columns: repeat(2, 1fr);
          // grid-template-columns: 1fr;
        `};
    }
  }

  @media (max-width: 500px) {
    & {
      margin-left: 0;
      /* margin-top: 1rem; */

      ${(props) =>
        props.isp &&
        css<IBoxProps>`
          padding: ${(props) => (props.padding ? props.padding : 0.3)}rem 1rem;
        `}

      ${(props) =>
        props.isml &&
        css<IBoxProps>`
          margin-left: ${(props) => (props.ml ? props.ml : 0)}rem;
        `}

      ${(props) =>
        props.isPosition &&
        css<IBoxProps>`
          position: initial;
          top: 0;
        `};

      ${(props) =>
        props.box &&
        css<IBoxProps>`
          /* display: initial;
          grid-template-columns: repeat(1, 1fr); */
        `};
    }
  }

  @media (max-width: 320px) {
    & {
      margin-left: 0;
      /* margin-top: 1rem; */

      ${(props) =>
        props.isp &&
        css<IBoxProps>`
          padding: ${(props) => (props.padding ? props.padding : 0.3)}rem 1rem;
        `}

      ${(props) =>
        props.isml &&
        css<IBoxProps>`
          margin-left: ${(props) => (props.ml ? props.ml : 0)}rem;
        `}

      ${(props) =>
        props.isPosition &&
        css<IBoxProps>`
          position: initial;
          top: 0;
        `};

      ${(props) =>
        props.box &&
        css<IBoxProps>`
          display: flex;
          grid-template-columns: 1fr;
        `};
    }
  }
`;
