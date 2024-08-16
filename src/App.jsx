import { useState } from 'react'
import './App.css'
import Quest from './Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Quest />
    </div>
  )
}

export default App
