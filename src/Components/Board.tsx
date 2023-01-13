import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
interface IBoardProps {
  toDos: string[]; //스트링으로 된 어레이임
  boardId: string;
}

interface IForm {
  toDo: string;
}
/* ./end type definition */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 0 0;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Area = styled.div<IAreaProps>`
  flex-grow: 1;
  width: 100%;
  min-height: 200px;
  padding: 10px 12px 15px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.cardBoxColor
      : props.isDraggingFromThis
      ? props.theme.cardBoxDraggingColor
      : props.theme.cardBoxColor};
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.titleColor};
`;

const Form = styled.form``;

/* ./ end Stye  */

function Board({ toDos, boardId }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            ref={magic.innerRef}
            {...magic.droppableProps}
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          >
            {toDos.map((toDo, index) => (
              // key 와 draggableId 가 동일해야 한다.=> key={toDo} toDo={toDo}
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

//ref란? react 코드에서 html 요소에 접근하는 방법
export default Board;
