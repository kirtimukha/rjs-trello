import React from 'react'
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import styled from "styled-components";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Categories, categoryState, toDoSelector, toDoState} from "./atom/atom";
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
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const fnCateChoice = (event:React.FormEvent<HTMLInputElement>) => {
    setCategory(event.currentTarget.value as any)
  };
  console.log(category);
  return(
    <div>
      <h1>Enter</h1>
      {/*<select name="" id="" value={category} onInput={fnCateChoice} >*/}
      {/*  <option value="TO_DO">To Do</option>*/}
      {/*  <option value="DOING">Doing</option>*/}
      {/*  <option value="DONE">Done</option>*/}
      {/*</select>*/}
      <label htmlFor="selTodo"> <input  onInput={fnCateChoice} type="radio" id="selTodo" name="todo_radio" radioGroup="todo_radio" value={Categories.TO_DO}/> To Do</label>
      <label htmlFor="selDoing"><input onInput={fnCateChoice} type="radio" id="selDoing" name="todo_radio" radioGroup="todo_radio" value={Categories.DOING}/> Doing</label>
      <label htmlFor="selDone"><input  onInput={fnCateChoice} type="radio" id="selDone" name="todo_radio" radioGroup="todo_radio" value={Categories.DONE} /> Done</label>
      <CreateToDo />

      <hr />
      {/*<Todos type="1">*/}
      {/*</Todos>*/}
      <Todos type="1">
        {toDos?.map(
          (toDo) => (<ToDo key={toDo.id} {...toDo}/> )
        )}
      </Todos>




    </div>
  )
}
export default TodoList