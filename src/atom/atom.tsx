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
    set: ({set}, newValue ) => {
        console.log(newValue);
    }
})