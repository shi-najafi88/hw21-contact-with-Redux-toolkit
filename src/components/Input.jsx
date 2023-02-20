
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

export const Input = ({type,placeholder,title,style,disabled}) => {

  return (
    <InputElem type={type} placeholder={placeholder} value={title} style={style} disabled={disabled} />
  )
}
