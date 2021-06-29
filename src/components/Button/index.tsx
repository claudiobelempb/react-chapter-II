import React from "react";
import { ButtonContainer, ButtonContent } from "./style";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  color?: string;
  isBgColor?: boolean;
  bgColor?: string;
  tgColor?: string;
  width?: number;
  MaxWidth?: number;
  MinWidth?: number;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
  alt?: string;
  src?: string;
  isImg?: boolean;
  isActive?: boolean;
  jContent?: string;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <ButtonContainer jContent={props.jContent}>
      {props.isImg ? <img src={props.src} alt={props.alt} /> : ""}
      <ButtonContent
        isBgColor={props.isBgColor}
        bgColor={props.bgColor}
        color={props.color}
        tagColor={props.tgColor}
        width={props.width}
        MaxWidth={props.MaxWidth}
        MinWidth={props.MinWidth}
        fontSize={props.fontSize}
        opacity={props.opacity}
        isAfter={props.isAfter}
        isImg={props.isImg}
        isActive={props.isActive}
        type={props.type}
        onClick={props.onClick}
        title={props.title}
      >
        <span>{props.title ? props.title : "Button"}</span>
      </ButtonContent>
    </ButtonContainer>
  );
}