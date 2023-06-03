export const colours = {
  black: "#000",
  primaryColour: "#42537F",
  secondaryColour: "#f7f7f7",
  white: "#fff",
};

export const ButtonWidth = {
  full: "full",
  standard: "standard",
} as const;
export const ButtonSize = {
  small: "small",
  standard: "standard",
} as const;

export const ButtonColours = {
  black: "black",
  primaryColour: "primaryColour",
  secondaryColour: "secondaryColour",
  white: "white",
} as const;
type CustomUnion<T> = T[keyof T];

export type IButtonColours = CustomUnion<typeof ButtonColours>;

export type IButtonSize = CustomUnion<typeof ButtonSize>;

export type IButtonWidth = CustomUnion<typeof ButtonWidth>;
