
import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import { Modal } from './components/Modal'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [editMood , setEditMood] = useState(false)

  return (
    <div className="App">
     <Main />
     <Modal />
    </div>
  )
}

export default App
