import React from 'react'
import styled from 'styled-components'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

const ModalContainer = styled.div`
    width:22%;
    padding: 1rem 1rem;
    background-color: rgb(87,3,73);
    border-radius: 10px;
`;
const ContainerIcons = styled.div`
  
`;

const Info = styled.p`
    font-size: 1.3rem;
    direction: rtl;
    color: white;
    margin-top: 0;
`

export const Modal = () => {
  return (
    <ModalContainer>
        <ContainerIcons>
            <BsFillTrashFill style={{color:'white', fontSize:'1.5rem'}} />
            <BiEdit style={{color:'white', fontSize:'1.5rem'}} />
        </ContainerIcons>
        <div>
            <Info>ggg</Info>
            <Info>ggg</Info>
            <Info>ggg</Info>
        </div>

    </ModalContainer>
  )
}
