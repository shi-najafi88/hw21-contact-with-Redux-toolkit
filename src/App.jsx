
import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import { Modal } from './components/Modal'
import 'react-toastify/dist/ReactToastify.css';
import {DeletModal} from './components/DeletModal'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ContainerModal = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`
function App() {
  const state = useSelector(state => state.contact)

  let getLocal = JSON.parse(localStorage.getItem('contact'))
        
  console.log(getLocal);

  return (
    <div className="App">
      
      <Main />
      <ContainerModal>
      {getLocal ? getLocal.map(item => (
         <Modal item={item} />
      )) : null}
      </ContainerModal>
      
     
      {state.deletMood? <DeletModal/>:null}
     
    </div>
  )
}

export default App
