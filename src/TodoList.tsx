import React from 'react'
import { useForm} from "react-hook-form";
import styled from "styled-components";

{/*
const TodoList = () => {
  const { register, handleSubmit } = useForm();
  const onValid = () => {

  };
  const [toDo, setTodo] = useState("");

  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value} } = event;
    setTodo(toDo);
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
*/}
const Errors = styled.span`
  display: block;
  color:red;
  font-size: 12px;
  margin-bottom:0.25rem;
`
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extraError? : string
}
const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
    setError
  } = useForm<IForm>(
    { defaultValues: {
      //email: "@naver.com"
      }}
  );

  //handleSubmit : 밸리데이션 역할. 리액트 훅 폼이 밸리데이션을 마쳤을 때만 호출된다.
  const onValid = (data:IForm) => {
    console.log(data);
    if(data.password !== data.password1) {
      setError("password1",
        {message: "Password are not the same."},
        //{shouldFocus: true}
      )
    }
  //setError("extraError", {message: "Server offline. "});
  }


  ;
  return(
    <div>
      <form onSubmit={handleSubmit(onValid)} style={{display:'flex', flexDirection:"column"}}>
      {/*handlesubmit 은 두개의 아규먼트를 갖고, 첫번째는 필수. 온밸리드*/}
        <input  type="email" placeholder="Email"
          {...register
          ("email",
            {
              required:"Email is required",
              pattern: {
                value:/^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "Only naver.com is allowed"
              },
            },
          )}
        />
        <Errors>{errors?.email?.message}</Errors>

        <input type="text"  placeholder="FirstName"
          {...register("firstName",
          {required:"First Name is required",
            validate: (value)=> value.includes("nico") ? "no nico allowed" : true,
          }
          )}
         />
        <Errors>{errors?.firstName?.message}</Errors>

        <input type="text"  placeholder="LastName"
          {...register("lastName",
            {
              required: "Last Name is required",
              validate:{
                noPark: async (value) => value.includes("Park" ) ? "no Park allowed" : true,
                noKim: (value) => value.includes("Kim" ) ? "no Kim allowed" : true,
            }
         }
        )}
       />
        <Errors>{errors?.lastName?.message}</Errors>

        <input  type="text"  placeholder="UseName"
          {...register(
          "userName", {
            required:"User Name is required, and 10 more character",
            minLength: {
              value: 5,
              message: "Min 5 character"
            }
          }
        )}
        />
        <Errors>{errors?.userName?.message}</Errors>

        <input type="password"  placeholder="password"
          {...register("password",
          {
            required:"Password is required",
            minLength: {
              value: 5,
              message: "Min 5 characters"
            },
            maxLength: {
              value: 15,
              message: "Max 15 characters"
            }
          }
        )}
         />
        <Errors>{errors?.password?.message}</Errors>
        <input {...register("password1",
          {
            required:"Password1 is required",
            minLength: {value: 5, message: "Min 5 characters"}
          }
        )}
         type="password"  placeholder="password1"/>

        <Errors>{errors?.password1?.message}</Errors>
        <button>Add</button>
        {/*<Errors>{errors?.extraError?.message}</Errors>*/}
      </form>
     </div>
  )
}
export default TodoList