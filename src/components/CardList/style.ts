import styled from "styled-components";

interface ICardListContainerProps {
  tagcolor?: string;
}

export const CardListContainer = styled.li<ICardListContainerProps>`
  position: relative;
  width: 100%;
  height: 4rem;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  /* margin-top: 1rem; */
  background-color: ${(props) => props.theme.colors.dark_light};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(1rem);
  }

  &::before {
    display: block;
    content: "";
    width: 1rem;
    height: 2rem;
    background-color: ${(props) => props.tagcolor || "#000"};
    position: absolute;
    left: 0;
    top: 1rem;
  }

  & .title {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    width: 100%;
  }

  & .sub_title {
    display: inline-block;
    width: 100%;
    font-weight: 100;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};
  }

  & .value {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    height: 100%;
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
