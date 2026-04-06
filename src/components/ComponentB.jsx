import React from 'react'
import CounterAtom from '../recoil/CounterAtom'
import { useRecoilState, useResetRecoilState} from 'recoil'

export default function ComponentB() {
    var [value, setValue] = useRecoilState(CounterAtom);
    var reset = useResetRecoilState(CounterAtom);
    console.log(setValue);

    function handleInc() {
        setValue(value + 1);
    }

    function handleDec(){
        setValue(value - 1);
    }

    function handleReset(){
        reset();
    }
  return (
    <div>
        <button onClick={handleInc}>Tang</button>
        <button onClick={handleDec}>Giam</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
