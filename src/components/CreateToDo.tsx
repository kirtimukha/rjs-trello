import React from "react";
import {useForm} from "react-hook-form";
import { useSetRecoilState} from "recoil";
import {IForm, toDoState} from "../atom/atom";

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos =useSetRecoilState(toDoState);
  const handleValid = ({toDo}:IForm)=>{
    setToDos((oldTodos) => [{text:toDo, id:Date.now(), category:"TO_DO"}, ...oldTodos])
    //setToDos 는 스테이트를 직접 받을 수도 있고, 다른 함수를 받을 수도 있다
    //함수를 쓴다면 함수의 리턴값이 새로운 state가 된다
    setValue("toDo", "");
  }

return (
<form onSubmit={handleSubmit(handleValid)}>
  <input type="text" placeholder="Write to do."
         {...register
         ("toDo",
           {required: "To do is required."}
         )
         }
  />
  <button>Add</button>
</form>

)

}
export default CreateToDo;