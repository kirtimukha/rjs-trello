import React from 'react'
import {Categories, IToDo, toDoState} from "../atom/atom";
import {useSetRecoilState} from "recoil";

{/*  2. 버튼에 네임을 붙이는 방식 */}
const ToDo = ({text, category, id}:IToDo) => { //2. id를 인자로 추가하고 아톰을 수정할 수 있도록 한다.
  const setToDos = useSetRecoilState(toDoState);
  const fnChgCate = (event:React.MouseEvent<HTMLButtonElement>) => {
    //console.log( event.currentTarget.name ) ; 0. 0을 1처럼 쓸 수 있다
    const {currentTarget:{name}} = event; // 1. event의 커런트 타켓에 들어가서 네임을 받는다( event.current.name 을 사용하는 다른 방법)
    setToDos((oldToDos) => {
      //3. id를 기반으로 수정하고자 하는 어레이의 인덱스를 찾는다.
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id) //라인 6에서 받은 props로 받은 아이디와 동일한 index를 찾는다
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text:text, id:id, category: name as any}
      return [
        // 타겟 인덱스에 newToDo를 업데이트 한다.
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex+1)
      ];
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={fnChgCate}>To do</button>
      )}
      {category !==  Categories.DOING && (
        <button name={Categories.DOING} onClick={fnChgCate}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={fnChgCate}>Done</button>
      )}
    </li>
  )
}
export default ToDo