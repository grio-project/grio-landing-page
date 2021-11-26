import React,{useState} from 'react'
import { SelectInputContainer } from './style'

type Props = {
  placeholder: any,
  options: string[],
}

export default function SelectInput(props: Props) {
  const [value, setValue] = useState()  
  const selectedValue = null;

  const handleValue = (e:any) => {
    setValue(e.target.value)
  }

  const items = []

  for (const value of props.options) {
    items.push(<option key={value} value={value}>{value}</option>)
  }

  return (

    <SelectInputContainer>
        <div className="form-group">
            <select className="form-control" placeholder={props.placeholder} onChange={e=>handleValue(e)}>
              {items}
            </select>
        </div>
    </SelectInputContainer>
   
  )
}