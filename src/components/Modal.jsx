import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { EDITICON , DELETMODAL } from '../redux/ContactSlice';

const ModalContainer = styled.div`
    width:20vw;
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
export const Modal = ({item}) => {

    const dispatch = useDispatch()
    
    const editHandler = (id) => {
        dispatch(EDITICON(id)) 
    }

    const deletHandler = (id) => {
        dispatch(DELETMODAL(id))
    }

  return (
   
    <ModalContainer>
        <ContainerIcons>
            <BsFillTrashFill onClick={()=>deletHandler(item.id)} style={{color:'white', fontSize:'1.5rem', cursor:'pointer'}} />
            <BiEdit onClick={()=>editHandler(item.id)} style={{color:'white', fontSize:'1.5rem', cursor:'pointer'}} />
        </ContainerIcons>
   
        {item?
            <div>
            <Info>{item.name + item.lastName}</Info>
            <Info>{item.selfRelative}</Info>
            <Info>{item.email}</Info> 
         </div>:''
        }
        
    </ModalContainer>
  )
}
