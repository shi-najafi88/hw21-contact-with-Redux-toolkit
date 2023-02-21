
import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import {useDispatch, useSelector} from 'react-redux'
import { useInput } from '../useInput'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { ContactSchema } from '../validation'

const MainContainer = styled.form`
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
    const dispatch = useDispatch()
    const state = useSelector(state => state.contact)
    const [disabled, setDisabled] = useState(true)
    const [valid, setValid] = useState(false)
    const [error, setError] = useState([])


    
    const validHandler = async() => {
        let dataValidation = {
            name,
            lastName,
            phone,
            email,
        } 
       
        try{
            await ContactSchema.validate(dataValidation,{abortEarly:false})
            setDisabled(false)
        }
        catch(err){
            setDisabled(true)
            setError(err.message)
            console.log(error);
        }
    }
    
    const {values:name, ValueChangeHandler:changeNameHandler} = useInput(validHandler)
    const {values:lastName, ValueChangeHandler:changeLastNameHandler} = useInput(validHandler)
    const {values:phone, ValueChangeHandler:changephoneHandler} = useInput(validHandler)
    const {values:email, ValueChangeHandler:changeemailHandler} = useInput(validHandler)
    const {values:selfRelative, ValueChangeHandler:changeselfRelativeHandler} = useInput(validHandler)
  
    const submitHandler = (e) => {
        e.preventDefault()
    } 
   
  return (
    <MainContainer onSubmit={submitHandler}>
        <H3>وب اپلیکیشن مدیریت مخاطبین</H3>
        <Input changeValue={changeNameHandler} type={'text'} placeholder={"نام..."} namee={name}/>
        <Input changeValue={changeLastNameHandler} type={'text'} placeholder={"نام خانوادگی..."} namee={lastName}/>
        <Input changeValue={changephoneHandler} type={'text'} placeholder={"شماره تماس..."} namee={phone}/>
        <Select onChange={changeselfRelativeHandler} name={selfRelative}>
            <option value="">نسبت</option>
            <option value="اعضای خانواده">اعضای خانواده</option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
        </Select>
        <Input changeValue={changeemailHandler} placeholder={"ایمیل..."} namee={email}/>
        <Input type={'submit'} title={"اضافه کردن"} style={{cursor:'pointer'}} disabled={disabled}/>
        
    </MainContainer>
  )
}
