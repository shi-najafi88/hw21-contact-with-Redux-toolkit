import React from 'react'
import styled from 'styled-components'

const ButtonElem = styled.button`
width: 98%;
padding: .5rem 2rem;
border-radius: 5px;
border: none;
cursor: pointer;
`
export const Button = ({children, styleBtn, clickHandler}) => {
  return (
    <ButtonElem onClick={clickHandler} style={{backgroundColor:styleBtn, color:'white'}}>{children}</ButtonElem>
  )
}
