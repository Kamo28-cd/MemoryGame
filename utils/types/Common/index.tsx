export type ICardProps = {
  id: number;
  index?: number;
  status: TStatus;
  image: string;
  handleClick?: Function;
}[];

type TStatus = "active" | "correct" | "incorrect" | string;

export type TScore = {
  player?: string;
  points: number;
  moves: number;
  isTurn?: boolean;
  [x: string]: any;
}[];
