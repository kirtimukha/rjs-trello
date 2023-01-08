import React from "react";
import {DragDropContext,  Droppable, DropResult,} from "react-beautiful-dnd";
import styled, {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {useRecoilState} from "recoil";
import {toDoState} from "./atom/atom";
import Board from "./Components/Board";


const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    font-family: 'Open Sans', 'Source Sans Pro', sans-serif;
    line-height: 1;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`;
{
  /* [ Droppable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. 3. 첫번째 아규먼트는 droppable로부터 받음. 4. draggableProps 와 dragHandelProps 속성을 가짐*/
}
{
  /* [ Draggable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. */
}
const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const changeToDo = () => {
    // setToDos (toDos, toDoState);
  };
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    //onDragEnd 는 : result, provided 두가지 아규먼트를 가짐

    // 1. 변경점이 없으면 아무 변화 없음
    if (!destination) return;
    // 2. 변경점이 있으면 setToDos 실행
    setToDos(( oldToDos) => {
      const copyToDos = [...oldToDos];
      //1) delete item on source.index
      copyToDos.splice(source.index, 1);
      //2) put back the item(draggableId) on destination.index
      copyToDos.splice(destination?.index, 0, draggableId);
      //3)
      return copyToDos;

    });
  };

  return (
    <>
      <GlobalStyle/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
              {Object.keys(toDos.map(boardId => <Board boardId={boardId} key={boardId}
                                                       toDos={toDos[boardId} /> }
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
