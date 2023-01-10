import { atom } from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

interface ITodoState {
  [key: string]: string[];
}
export const toDoState = atom({
  key: "toDo",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
    // 4라인을 인터페이스를 통해서
    // lalalal : []  형태의 어레이를 추가할 수 있게 된다.
  },
});
