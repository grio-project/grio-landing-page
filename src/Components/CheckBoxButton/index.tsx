import React,{useState} from 'react'
import { CheckboxButtonContainer } from './style'

type Props = {
  id: string,
  label:string,
  getValue: (e: any) => void,
}

export default function CheckBoxButton({ id, label, getValue }: Props) {
  const [selected, setSelected] = useState(false)  
  const selectedValue = null;

  const handleValue = (e:any) => {
    setSelected(e.target.checked)
    getValue(label)
  }

  return (
    <CheckboxButtonContainer>
        <input
          id={id}
          className="form-check-input"
          type="checkbox"
          value={label}
          onChange={handleValue}
        />
        <label htmlFor={id}>{label}</label>
    </CheckboxButtonContainer>
  )
}