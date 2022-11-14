import { useState } from 'react'


function App({children}) {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-50">
        <p>Hello</p>
    </div>
  )
}

export default App
