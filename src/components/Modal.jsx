import React from 'react'
import styled from 'styled-components'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { useSelector } from 'react-redux';

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

    const state = useSelector(state => state.contact)
    let info = state.contactInfo.payload

    // let getLocal={}
    // const getLocalStorage = () => {
    //     getLocal = JSON.parse(localStorage.getItem('contact'))
    //     console.log(getLocal);
    // }
    // getLocalStorage()
    

  return (
    <ModalContainer>
        <ContainerIcons>
            <BsFillTrashFill style={{color:'white', fontSize:'1.5rem'}} />
            <BiEdit style={{color:'white', fontSize:'1.5rem'}} />
        </ContainerIcons>

        { (info!= null)? 
        <div>
            <Info>{info.nameAndLastName}</Info>
            <Info>{info.relation}</Info>
            <Info>{info.email}</Info>
        </div>: null
        }
        

    </ModalContainer>
  )
}
