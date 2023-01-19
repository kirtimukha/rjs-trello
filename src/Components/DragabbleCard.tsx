import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;  
  color:${(props) =>
    props.isDragging ? props.theme.cardColor : props.theme.textColor}
  background-color: ${(props) =>
    props.isDragging
      ? props.theme.cardBoxDraggingColor
      : props.theme.cardColor};   
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 25px rgba(0,0,0,0.5)" : "none"}
  :first-child {
    margin-top: 0;
  }
`;

const WrapperEdit = styled.div`
  float: right;
`;
const EditBtn = styled.button`
  margin-left: 4px;
  color: ${(props) => props.theme.titleColor};
  border: 1px solid ${(props) => props.theme.titleColor};
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s ease-in-out;
  &:first-child {
    margin: 0;
  }
  &:hover {
    background: ${(props) => props.theme.titleColor};
    color: ${(props) => props.theme.cardColor};
  }
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
function DragabbleCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  // console.log(toDo, "has been rendered."); //리액트는 컴포넌트의 state가 변경되면 칠드런 모두가 재렌더링 된다.
  // [ @@ 불필요한 렌더링 방지 REACT MEMO @@ ]
  // ReactMemo 가 사용된 컴포넌트는 prop이 변경될 때만 재렌더링 됨
  // 즉, prop이 변경되지 않는한 컴포넌트 재렌더링 발생하지 않음

  const changeToDo = () => {
    // setToDos (toDos, toDoState);
  };
  return (
    <>
      <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
        {(magic, snaps) => (
          <Card
            isDragging={snaps.isDragging}
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
            onChange={changeToDo}
          >
            {toDoText}{" "}
            <WrapperEdit>
              <EditBtn>
                <FontAwesomeIcon icon={faPencil} size="xs" />
              </EditBtn>
              <EditBtn>
                <FontAwesomeIcon icon={faTrash} size="xs" />
              </EditBtn>
            </WrapperEdit>
          </Card>
        )}
      </Draggable>
    </>
  );
}
// ReactMemo: state가 변해도 React.memo에 감싸진 컴포넌트는 재렌더링이 일어나지 않늗다.
// ReactMemo에 감싸진 컴포넌트는 prop이 변할 때만 재렌더링 된다.
export default React.memo(DragabbleCard);
