import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    titleColor: string;
    cardColor: string;
    cardBoxColor: string;
    cardBoxDraggingColor: string;
    boardColor: string;
  }
}
