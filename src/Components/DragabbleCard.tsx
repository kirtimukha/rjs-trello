import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardColor};

  :first-child {
    margin-top: 0;
  }
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}
function DragabbleCard({toDo, index }: IDraggableCardProps)  {
    console.log(toDo, 'has been rendered.');//리액트는 컴포넌트의 state가 변경되면 칠드런 모두가 재렌더링 된다.
  // [ @@ 불필요한 렌더링 방지 REACT MEMO @@ ]
  // reactMemo 가 사용된 컴포넌트는 prop이 변경될 때만 재렌더링 됨
  // 즉, prop이 변경되지 않는한 컴포넌트 재렌더링 발생하지 않음

  const changeToDo = () => {
    // setToDos (toDos, toDoState);
  };
return (
  <>
    <Draggable  key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
          onChange={changeToDo}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  </>
)}

export default DragabbleCard