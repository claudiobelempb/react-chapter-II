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
  isIcon?: boolean;
  isActive?: boolean;
  jContent?: string;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
  isBlue?: boolean;
  isGreen?: boolean;
  isGreenLight?: boolean;
  isRed?: boolean;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <ButtonContainer jContent={props.jContent}>
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
        isIcon={props.isIcon}
        isActive={props.isActive}
        type={props.type}
        onClick={props.onClick}
        title={props.title}
        isLarge={props.isLarge}
        isMedium={props.isMedium}
        isSmall={props.isSmall}
        isBlue={props.isBlue}
        isGreen={props.isGreen}
        isGreenLight={props.isGreenLight}
        isRed={props.isRed}
      >
        {props.isIcon ? <img src={props.src} alt={props.alt} /> : ""}
        {props.title ? props.title : "Button"}
      </ButtonContent>
    </ButtonContainer>
  );
}
