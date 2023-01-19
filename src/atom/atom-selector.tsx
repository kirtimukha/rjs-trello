import {atom, selector} from "recoil";
//selector : state 를 입력 받는 함수를 거쳐서 반환된 값을 말함

export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const hourSelector = selector({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes/60 ;
    },
    // state 를 set 하도록 함 =  state가 어떤 형태이든 수정될 수 있도록 함
    // newValue : 보낼 값
    set: ({set}, newValue ) => {
        const minutes = Number(newValue) * 60;
       set(minuteState, minutes);
    }
})