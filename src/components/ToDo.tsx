import React from 'react'
import {IToDo} from "../atom/atom";

const ToDo = ({text, category}:IToDo) => {
  {/* 1. 인자로 프롭을 넘겨주는 fnChgCate */
  }
  {/*
  const fnChgCate=(newCategory: IToDo["category"])=> {
    console.log("I want to change to ", category)
  }
  return(
   <li>
     <span>{text}</span>
     {category !=="TO_DO" && (
       <button onClick={ ()=> fnChgCate("TO_DO")}>To do</button>
     )}
     {category !=="DOING" && (
       <button onClick={ ()=> fnChgCate("DOING")}>Doing</button>
     )}
     {category !=="DONE" && (
       <button onClick={ ()=> fnChgCate("DONE")}>Done</button>
     )}
   </li>
  ) */
  }

  {/*  2. 버튼에 네임을 붙이는 방식 */
  }
  const fnChgCate = (event:React.MouseEvent<HTMLButtonElement>) => {
     //event를 통해서 버튼의 name을 가져올 수 있다
    console.log("I want to change to ", event.currentTarget.name);
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