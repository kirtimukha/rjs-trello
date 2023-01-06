import {atom} from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

export const toDoState = atom({
  key : "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});