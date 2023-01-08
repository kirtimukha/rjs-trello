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
      {/*//드래거블 아이디에 ""(큰따옴표) 로 이름을 주면 Card 드래그 드랍시 1개만 보이므로 {}(대괄호)사용.*/}
      {/*//드래거블 아이디와 key 네임이 같아야 한다 */}
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