import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { EDITICON } from '../redux/ContactSlice';

const ModalContainer = styled.div`
    width:22%;
    padding: 1rem 1rem;
    background-color: rgb(87,3,73);
    border-radius: 10px;
`;
const ContainerIcons = styled.div`
  
`;

const Info = styled.p`
    font-size: 1.1rem;
    direction: rtl;
    color: white;
    margin-top: 0;
    letter-spacing: .1rem;
`

export const Modal = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.contact)
    let info = state.contactInfo.payload

    const editHandler = () => {
        dispatch(EDITICON()) 
    }

    const deletHandler = () => {
        dispatch(DELET())
    }

  return (
    <ModalContainer>
        <ContainerIcons>
            <BsFillTrashFill onClick={deletHandler}  style={{color:'white', fontSize:'1.5rem', cursor:'pointer'}} />
            <BiEdit onClick={editHandler} style={{color:'white', fontSize:'1.5rem', cursor:'pointer'}} />
        </ContainerIcons>

        { (info!= null) && state.editMood? 
        <div>
            <Info>{info.nameAndLastName}</Info>
            <Info>{info.relation}</Info>
            <Info>{info.email}</Info>
        </div>: null
        }
        
    </ModalContainer>
  )
}
