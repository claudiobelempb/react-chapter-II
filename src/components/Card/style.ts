import styled from "styled-components";

interface ICardProps {
  bgColor?: string;
  color?: string;
}

export const CardContainer = styled.article<ICardProps>`
  width: 100%;
  height: auto;
  min-height: 136px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.white};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.dark_light};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  margin-right: 1rem;
  position: relative;
  right: 0;
  left: 0;
  top: -97px;
  border-radius: 0.25rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardValue = styled.div`
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.5rem;
`;

export const CardIcon = styled.h1``;

export const CardTitle = styled.h1<ICardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
`;
