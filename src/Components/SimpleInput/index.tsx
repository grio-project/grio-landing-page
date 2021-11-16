import React,{useState} from 'react'
import { SimpleInputContainer } from './style'

type Props = {
  placeholder: string,
  name: string
}

export default function SimpleInput(props: Props) {
  const [value, setValue] = useState()  

  const handleValue = (e:any) => {
      setValue(e.target.value)
    }
  return (
    <SimpleInputContainer>
      <div className="mb-3">
        <input
         className="form-control"
         placeholder={props.placeholder}
          name={props.name}
          value={value}
          onChange={e=>handleValue(e)}
          type="text"
        // className="SimpleInput-input"
          
        />
      </div>
    </SimpleInputContainer>
  )
}