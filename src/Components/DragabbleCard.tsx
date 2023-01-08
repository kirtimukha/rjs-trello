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