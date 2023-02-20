
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import { Input } from './Input'

const MainContainer = styled.div`
width: 20%;
padding: 1.5rem 2rem;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 1rem;
background-color: rgb(87,3,73);
`;

const H3 = styled.h3`
    color: white;
    text-align: center;
    font-weight: lighter;
    margin: 0;
`

const Select = styled.select`
padding: 0.3rem 0.5rem;
border-radius: 5px;
direction: rtl;
font-size:.9rem;
border: none;
outline: none;
`

export const Main = () => {

  return (
    <MainContainer>
        <H3>وب اپلیکیشن مدیریت مخاطبین</H3>
        <Input type={'text'} placeholder={"نام..."}/>
        <Input type={'text'} placeholder={"نام خانوادگی..."}/>
        <Input type={'text'} placeholder={"شماره تماس..."}/>
        <Select>
            <option value="">نسبت</option>
            <option value="">اعضای خانواده</option>
            <option value="">دوست</option>
            <option value="">همکار</option>
        </Select>
        <Input type={'email'} placeholder={"ایمیل..."}/>
        <Input type={'button'} title={"اضافه کردن"} style={{cursor:'pointer'}} disabled={true}/>
    </MainContainer>
  )
}
