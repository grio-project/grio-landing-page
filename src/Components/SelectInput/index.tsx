import React,{useState} from 'react'
import { SelectIputContainer } from './style'

type Props = {
    valueSelect: string, 
    placeholder: string,
}

export default function SelectInput(props: Props) {
  const [value, setValue] = useState()  
  const selectedValue = null;

  const handleValue = (e:any) => {
      setValue(e.target.value)
    }

  return (

    <SelectIputContainer>
        <div className="form-group">
            <select className="form-control" >
                <option selected>Selecione uma opção</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </SelectIputContainer>
   
  )
}