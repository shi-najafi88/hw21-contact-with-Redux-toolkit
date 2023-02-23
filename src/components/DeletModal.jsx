import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Button } from './Button'
import { NO_MODAL_DELE, YES_MODAL_DELE } from '../redux/ContactSlice';
import { toast, ToastContainer } from 'react-toastify';

const Overlay = styled.div`
position: absolute;
background-color: rgba(66,66,66,0.7);
top: 0;
left: 0;
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center
`;

const ContainerDeletModal = styled.div`
margin-top: 1rem;
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
padding: 1.5rem;
border-radius: 10px;
background-color: #e4f7f7;
font-family: Arial, Helvetica, sans-serif;
`;
const P = styled.p`
font-size: 1.4rem;    
`;
const BtnContainer = styled.div`
display: flex;
gap: 1rem;
`;

export const DeletModal = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.contact)

    const yesDelet = () => {
        dispatch(YES_MODAL_DELE())
        toast.success("Delet is successfuly!")
    }

    const noDelet = () => {
       dispatch(NO_MODAL_DELE())
    }

  return (
    <>
    <ToastContainer/>

    <Overlay>
        <ContainerDeletModal>
        <P>Are you sure delet?!</P>
        <BtnContainer>
           <Button clickHandler={yesDelet} styleBtn={'red'}>{"Yes"}</Button>
           <Button clickHandler={noDelet} styleBtn={'#468cdd'}>{"No"}</Button>
        </BtnContainer>
    </ContainerDeletModal>
    </Overlay>
    </>
  )
}
