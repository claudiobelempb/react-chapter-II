import { CardContainer, CardTitle, CardValue, CardIcon } from "./style";

interface ICardProps {
  bgColor?: string;
  color?: string;
  icon?: string;
  alt?: string;
  title?: string;
  value?: string | number;
}
export function Card({ ...props }: ICardProps) {
  return (
    <CardContainer bgColor={props.bgColor} color={props.color}>
      <CardTitle>
        {props.title}
        <CardIcon>
          <img src={props.icon} alt={props.alt} />
        </CardIcon>
      </CardTitle>
      <CardValue>{props.value}</CardValue>
    </CardContainer>
  );
}
