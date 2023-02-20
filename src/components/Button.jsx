import React from 'react'
import styled from 'styled-components'

const ButtonElem = styled.button`
width: 98%;
padding: 0.4rem 0.7rem;
border-radius: 5px;
border: none;
cursor: pointer;
`
export const Button = ({title}) => {
  return (
    <ButtonElem>{title}</ButtonElem>
  )
}
