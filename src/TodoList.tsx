import React, {useState} from 'react'
import {useForm} from "react-hook-form";

const TodoList = () => {
  const {register, handleSubmit } = useForm();
  const onValid = () => {

  };
  const [toDo, setTodo] = useState("");
  const onChange = (event :React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value} } = event;
    setTodo(value);
  }
  const onSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  }

return(
  <>
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input onChange={onChange} type="email" value={toDo} placeholder="Email"/>
        <input onChange={onChange} type="text" value={toDo} placeholder="FirstName"/>
        <input onChange={onChange} type="text" value={toDo} placeholder="LastName"/>
        <input onChange={onChange} type="text" value={toDo} placeholder="UseName"/>
        <input onChange={onChange} type="password" value={toDo} placeholder="password1"/>
        <input onChange={onChange} type="password" value={toDo} placeholder="password2"/>
        <button>Add</button>
      </form>
     </div>
  </>
)
}
export default TodoList