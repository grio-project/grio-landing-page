import React,{useState} from 'react'
import { RadioButtonContainer } from './style'

type Props = {
  valueButton: string
}

export default function RadioButton(props: Props) {
  const [value, setValue] = useState()  
  const selectedValue = null;

  const handleValue = (e:any) => {
      setValue(e.target.value)
    }

  return (
    <RadioButtonContainer>
        <input
           className="form-check-input"
            type="radio"
            onChange={handleValue}
            value={props.valueButton}
         />
    </RadioButtonContainer>
  )
}