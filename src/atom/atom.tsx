import {atom} from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

interface ITodoState{
  [key: string]: string[];

}
export const toDoState = atom({
  key : "toDo",
  default: {
    to_do: ["a", "b", "c", "d", "e", "f"],
    doing: [],
    done:[]
  },
});