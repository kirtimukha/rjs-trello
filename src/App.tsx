import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import TodoList from "./TodoList";
const GlobalStyle=createGlobalStyle`
    *{box-sizing:border-box; }
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`

const App = () => {
return (
    <>
        <GlobalStyle />
        <TodoList />
    </>
)
}

export default App;
