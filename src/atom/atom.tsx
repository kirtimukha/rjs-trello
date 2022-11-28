import {atom, selector} from "recoil";

export interface IForm {
  toDo: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
export const toDoStateAtom = atom<IToDo[]>({
  key: "toDo",
  default:[],
})

export const toDoSelector = selector({
  //atom 스테이트를 변환시키는 용도로 셀렉터를 사용한다.
  key:"toDoSelector",
  get: ({ get }) => {
   // const toDos = get(toDoStateAtom);
    const toDos = get(toDoStateAtom)
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  }
})