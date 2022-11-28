import React from 'react'
import {IToDo, toDoStateAtom} from "../atom/atom";
import {useSetRecoilState} from "recoil";

{/*  2. 버튼에 네임을 붙이는 방식 */}
const ToDo = ({text, category, id}:IToDo) => { //2. id를 인자로 추가하고 아톰을 수정할 수 있도록 한다.
  const setToDos = useSetRecoilState(toDoStateAtom);
  const fnChgCate = (event:React.MouseEvent<HTMLButtonElement>) => {
    //console.log( event.currentTarget.name ) ; 0. 0을 1처럼 쓸 수 있다
    const {currentTarget:{name}} = event; // 1. event의 커런트 타켓에 들어가서 네임을 받는다
    setToDos((oldToDos) => {
      //3. id를 기반으로 수정하고자 하는 어레이의 인덱스를 찾는다.
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id) //라인 6에서 받은 props로 받은 아이디와 동일한 index를 찾는다
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text:text, id:id, category: name as any}
      //console.log(targetIndex);
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex+1)
      ];
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={fnChgCate}>To do</button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={fnChgCate}>Doing</button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={fnChgCate}>Done</button>
      )}
    </li>
  )
}
export default ToDo