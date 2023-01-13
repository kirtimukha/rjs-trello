import { atom } from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  [key: string]: ITodo[]; // string[] : string 들의 어레이
}
export const toDoState = atom<ITodoState>({
  key: "toDo",
  default: {
    //to do oject를 가진 어레이로 변경했음
    // 변경 전, "To Do": ["a" ,"b"]
    // 변경 후,  "To Do": [{text: "hello", id: 1},{text: "hello2", id: 2} ]
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
