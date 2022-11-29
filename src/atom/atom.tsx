import {atom, selector} from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

export interface IForm {
  toDo: string;
}
export enum Categories {
  "TO_DO"= "TO_DO",
  "DOING" = "DOING",
  "DONE"= "DONE"
}
//type categories = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default:[],
})
export const toDoSelector = selector({
  key:"toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState)
    const category = get(categoryState)
    return toDos.filter((toDo) => toDo.category === category)
  }
})