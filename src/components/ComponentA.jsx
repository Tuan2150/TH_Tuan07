import React from 'react'
import CounterAtom from '../recoil/CounterAtom'
import { useRecoilValue } from 'recoil'

export default function ComponentA() {
    var value = useRecoilValue(CounterAtom);

  return (
    <div>
        <h1>Number: {value}</h1>
    </div>
  )
}
