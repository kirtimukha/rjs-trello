import React from 'react'
import {IToDo, todoStateAtom} from "../atom/atom";
import {useSetRecoilState} from "recoil";

//3. id를 기반으로 어레이의 인덱스를 찾는다.
const ToDo = ({text, category, id}:IToDo) => { //2. id를 인자로 추가하고 아톰을 수정할 수 있도록 한다.
  const setToDos = useSetRecoilState(todoStateAtom);
  {/*  2. 버튼에 네임을 붙이는 방식 */
  }
  const fnChgCate = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = event; // 1. event의 커런트 타켓에 들어가서 네임을 받는다
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id) //라인 6에서 받은 props로 받은 아이디와 동일핝 idex를 찾는다
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text:text, id:id, category: name}
      console.log(oldToDo, newToDo);
      return oldToDos;
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