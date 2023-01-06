import React from 'react';
import {createGlobalStyle} from "styled-components";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`

function App() {
  const onDragEnd = () => {
  }
  return (
    <>
      <GlobalStyle/>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          {/* [ Droppable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. */}
          <Droppable droppableId="wrapDrop">
            {() => (
              <ul>
                {/* [ Droppable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. */}
                <Draggable draggableId="zero" index={0}>{() => <li>Zero</li>}</Draggable>
                <Draggable draggableId="first" index={1}>{() => <li>First</li>}</Draggable>
              </ul>
              )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  )
}

export default App;
