export type ICardProps = {
  id: number;
  index?: number;
  status: TStatus;
  image: string;
  handleClick?: Function;
}[];

type TStatus = "active" | "correct" | "incorrect" | string;
