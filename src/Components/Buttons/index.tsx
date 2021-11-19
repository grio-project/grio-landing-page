import React,{useState} from 'react'
import { ButtonsContainer } from './style'

type Props = {
  handleClick: () => void, 
  label: string,
}

export default function Buttons(props: Props) {
  return (
    <ButtonsContainer>
        
        <button onClick={props.handleClick} type="button" className="btn btn-outline-secondary btn-lg ">{props.label}</button>
       
    </ButtonsContainer>
  )
}