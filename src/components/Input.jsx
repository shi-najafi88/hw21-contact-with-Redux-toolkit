
import React from 'react'
import styled from 'styled-components'

const InputElem = styled.input`
padding: 0.4rem 0.7rem;
border-radius: 5px;
direction: rtl;
font-size:.9rem;
outline: none;
border: none;
`

export const Input = ({type,placeholder,title,namee,disabled,changeValue,BtnStyle}) => {

  return (
    <InputElem onChange={changeValue} type={type} placeholder={placeholder} name={namee} disabled={disabled} value={title} style={BtnStyle} />
  )
}
