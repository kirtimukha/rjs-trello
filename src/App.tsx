import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {hourSelector, minuteState} from './atom/atom';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }
  const hours = useRecoilValue(hourSelector);

  return (
    <>
      <GlobalStyle/>
      <div>
        <input type="number" placeholder="Minutes" defaultValue={minutes} onChange={onMinutesChange}/>
        <input type="number" placeholder="Hours" value={hours} readOnly/>
      </div>
    </>
  )
}

export default App;
