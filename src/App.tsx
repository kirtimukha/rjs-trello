import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom/atom";
import Board from "./Components/Board";
import "./index.css";

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
    font-family: var(--font-nunito);
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
  //
  //@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`;
{
  /* [ Droppable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. 3. 첫번째 아규먼트는 droppable로부터 받음. 4. draggableProps 와 dragHandelProps 속성을 가짐*/
}
{
  /* [ Draggable 의 특징 ] 1. children 을 가진다 2. children 은 함수이다. */
}
const Wrapper = styled.div`
  display: flex;
  //max-width: 680px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.125rem;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  //grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  //onDragEnd 는 :   result(여기서는 info로 적음), provided 두가지 아규먼트를 가짐
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    console.log(info);
    //0. 변경사항이 없으면 onDragEnd 기능을 끝낸다.
    if (!destination) return;
    //1. 같은 보드 안에서 변경할 때
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        // 변경사항을 감지해서 함수로 전달할다
        const boardCopy = [...allBoards[source.droppableId]]; // ==>  ...allBoards["To_Do"] || [Doing] || [Done]
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);

        return {
          // 변경된 것만 카피 하고 리턴은 전체 보드(droppableId 이외의 것도 ) 복사하고
          ...allBoards,
          //  droppabledId 변형된 보드카피 부분도 리턴해준다.
          [source.droppableId]: boardCopy, //==>  To_Do: boardCopy
        };
      });
    }

    //2. 다른 보드간의 변경일 때
    if (destination?.droppableId !== source.droppableId) {
      //set( (arg(<--현재상태가 그냥 제공됨)) => {})
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destiBoard = [...allBoards[destination.droppableId]]; // 여기 왜 드래거블 아이디가 아니지?

        sourceBoard.splice(source.index, 1);
        destiBoard.splice(destination?.index, 0, draggableId);

        return {
          // 변경된 것만 카피 하고 리턴은 전체 보드(droppableId 이외의 것도 ) 복사하고
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destiBoard,
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              // <Title boardId={boardId} />
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
