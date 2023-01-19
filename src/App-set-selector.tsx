import React from 'react';
import {createGlobalStyle} from "styled-components";
import {useRecoilState} from "recoil";
import {hourSelector, minuteState} from './atom/atom-selector';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
`

function AppSetSelector() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  //useRecoilState( A ) : A에는 아톰이름 혹은 셀렉터 이름을 쓸 수 있다.
  //useRecoilState 를 쓸 때, 결과 []의 첫번째 item  은  atom 값이거나, selector의 get 함수의 값이다.
  //useRecoilState의 두번째 요소는 atom을 수정하거나 selector의  set property를 실행시키는 함수이다.
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value)
  }
  return (
    <>
      <GlobalStyle/>
      <div>
        <input type="number" placeholder="Minutes" value={minutes} onChange={onMinutesChange}/>
        <input type="number" placeholder="Hours" value={hours} onChange={onHoursChange}/>
      </div>
      <div></div>
    </>
  )
}

export default AppSetSelector;
