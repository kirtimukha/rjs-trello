import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atom/atom";
import { useSetRecoilState } from "recoil";

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
interface IBoardProps {
  toDos: ITodo[]; //스트링으로 된 어레이임
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
  font-size: 1.125rem;
  color: ${(props) => props.theme.titleColor};
`;

const Form = styled.form`
  padding: 0.5rem;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  color: ${(props) => props.theme.titleColor};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.titleColor};
  background: transparent;
`;
/* ./ end Stye  */

function Board({ toDos, boardId }: IBoardProps) {
  //입력받은 newToDo를 어레이에 집어넣기
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [
          //boardId 가 아니고 [boardId]로 써야 함
          // 왜newToDo.boardId가 아닐까...
          ...allBoards[boardId],
          newToDo,
        ],
      };
    });

    setValue("toDo", ""); // 이게 왜 필요하지???? // 삭제하면 인풋에 기재하던 내용이 그대로 남는다.
    //엔터 후의 인풋 요소에 텍스트를 없애주는 기능
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              // key 와 draggableId 가 동일해야 한다.=> key={toDo} toDo={toDo}
              <DragabbleCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
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
