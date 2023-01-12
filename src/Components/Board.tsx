import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
const Area = styled.div<IAreaProps>`
  flex-grow: 1;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  border-radius: 5px;
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
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.titleColor};
`;

interface IBoardProps {
  toDos: string[]; //스트링으로 된 어레이임
  boardId: string;
}
function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
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
export default Board;
