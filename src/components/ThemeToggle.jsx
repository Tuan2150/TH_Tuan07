import React from 'react'
import themeState from '../recoil/themeState'
import { useRecoilValue, useRecoilState } from 'recoil'

export default function ThemeToggle() {
    var theme = useRecoilValue(themeState);
    var [theme,setTheme] = useRecoilState(themeState);

    function ToggleTheme(){
        setTheme((theme) =>(theme === 'dark' ? 'light': 'dark'));
    }
  return (
    <div>
        <h1>{theme}</h1>
        <button onClick={ToggleTheme}
            style={{
                backgroundColor: theme === 'light' ? '#333' : '#fff',
                color: theme === 'light' ? '#fff' : '#333',
            }}
        >
            Change Theme
         </button>
    </div>
  )
}
