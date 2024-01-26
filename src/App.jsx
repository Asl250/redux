import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'


function App() {
 const [count, setCount] = useState(0)

 const plus = () =>{
  setCount(prev => prev +1)
 }
 const minus = () =>{
  setCount(prew => prew - 1)
 }
 const reset = () =>{
  setCount(0)
 }

  return (
    <>
    <div className='conteinet'>
      <h1>counter: {count}</h1>
      <Counter plus={plus} minus={minus} reset={reset}/>
    </div>
    </>
  )
}

export default App
