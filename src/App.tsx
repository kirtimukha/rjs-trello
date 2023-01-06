import React from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  ul, li {
    list-style: none;
  }

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`
{/* [ Droppable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. 3. 첫번째 아규먼트는 droppable로부터 받음. 4. draggableProps 와 dragHandelProps 속성을 가짐*/
}
{/* [ Draggable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. */
}

function App() {
  const onDragEnd = () => {
  }
  return (
    <>
      <GlobalStyle/>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="wrapDrop">
            {(arg) => (
              <ul ref={arg.innerRef} {...arg.droppableProps} >
                <Draggable draggableId="zero" index={0}>
                  {(arg) => (<li ref={arg.innerRef} {...arg.draggableProps}><span  {...arg.dragHandleProps}> &#9917;</span>Zero</li>)}
                </Draggable>
                <Draggable draggableId="first" index={1}>
                  {(arg) => (<li ref={arg.innerRef} {...arg.draggableProps}><span  {...arg.dragHandleProps}> &#9917;</span>First</li>)}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  )
}

export default App;
