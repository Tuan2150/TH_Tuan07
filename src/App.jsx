import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilValue } from 'recoil'
import CounterAtom from './recoil/CounterAtom'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ThemeToggle from './components/ThemeToggle'
import themeState from './recoil/themeState'

function App() {
  const [count, setCount] = useState(0)

  var value = useRecoilValue(CounterAtom);

  const theme = useRecoilValue(themeState);

  // Định nghĩa màu sắc cho 2 chế độ
  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
    // color: theme === 'light' ? '#213547' : '#ffffff',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease', // Thêm hiệu ứng chuyển màu mượt mà
    fontFamily: 'sans-serif'
  };

  return (
    <>
      <div style={appStyle}>
        <h1>Bai 1</h1>
        <ComponentA/>
        <ComponentB/>
        <h1>Bai 2</h1>
        <ThemeToggle/>
      </div>
    </>
  )
}

export default App
