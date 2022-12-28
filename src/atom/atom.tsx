import {atom, selector} from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

export interface IForm {
  toDo: string;
}

//type categories = "TO_DO" | "DOING" | "DONE";
export enum Categories {
  "TO_DO"= "TO_DO",
  "DOING" = "DOING",
  "DONE"= "DONE"
}

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
// selector : atom의 output을 변화시키는 도구
export const toDoSelector = selector({
  key:"toDoSelector",
  get: ({ get }) => {
    // 셀렉터의 get 인자는 options라는 인자를 받으면서 호출되는데, get : (options) =>
    // options는 객체이고, 그 객체에는 get function 이 들어있다
    // getfunction 을 이용하면 selector의 내부로 atom을 가져 올 수 있다.
    //
    const toDos = get(toDoState)
    const category = get(categoryState)
    //return 하는 값이 셀렉터의 값이 된다.
    return toDos.filter((toDo) => toDo.category === category)//조건을 만족하는 것만 필터링해서 어레이를 만든다
    // 카테고리가 일치하는 것끼리 모아 필터링 후 어레이로 만듦
  }
})

