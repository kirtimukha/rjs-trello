import React from 'react'
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {toDoSelector, toDoStateAtom} from "./atom/atom";
const Todos = styled.ol`
  float: none;
  margin:0;
  padding:0;
    li{
        margin:0;
        color: #585858;
        font-size: 14px; 
        //list-style: none;
    }
`
const TodoList = () => {
  //const toDos = useRecoilValue(toDoStateAtom);
  const [todo, doing, done] = useRecoilValue(toDoSelector);
  //console.log(selectorOutput);
  return(
    <div>
      <h1>Enter</h1>

      <CreateToDo />
      <hr />
      <h2>
        To Do
      </h2>
      <Todos type="1">
        {/*{toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id}  />)}*/}
        {todo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)} {/* { ...toDo } toDo(IToDo[])의 모든 원소가 동일한 형태로 반복된다.*/}
      </Todos>
      <hr />

      <h2>
        Doing
      </h2>
      <Todos type="1">
        {/*{toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id}  />)}*/}
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)} {/* { ...toDo } toDo(IToDo[])의 모든 원소가 동일한 형태로 반복된다.*/}
      </Todos>
      <hr />

      <h2>
       Done
      </h2>
      <Todos type="1">
        {/*{toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id}  />)}*/}
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)} {/* { ...toDo } toDo(IToDo[])의 모든 원소가 동일한 형태로 반복된다.*/}
      </Todos>


    </div>
  )
}
export default TodoList