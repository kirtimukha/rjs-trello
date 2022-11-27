import {atom} from "recoil";

export interface IForm {
  toDo: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
export const todoStateAtom = atom<IToDo[]>({
  key: "toDo",
  default:[],
})
