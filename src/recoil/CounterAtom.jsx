import {atom} from "recoil"

const CounterAtom = atom({
    key:'CounterAtom',
    default: 0
})

export default CounterAtom;