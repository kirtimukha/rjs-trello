import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";

const BoardWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;

interface IBoardProps {
  toDos: string[]; //스트링으로 된 어레이임
  boardId: string;
}
function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <BoardWrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </BoardWrapper>
      )}
    </Droppable>
  );
}
export default Board;
