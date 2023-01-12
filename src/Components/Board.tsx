import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;
const BoardWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardBoxColor};
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
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
        {(magic) => (
          <BoardWrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              // key 와 draggableId 가 동일해야 한다.=> key={toDo} toDo={toDo}
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </BoardWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
