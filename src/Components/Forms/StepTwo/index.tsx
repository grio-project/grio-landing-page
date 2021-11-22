import React from 'react'
import Buttons from '../../Buttons'
import RadioButton from '../../RadioButton'
import SelectInput from '../../SelectInput'
import SimpleInput from '../../SimpleInput'
import { StepTwoContenair, StepTwoAction, StepTags} from './style'

type Props = {
  formData:any,   
  navigation: any,

}

export default function StepTwo(props: Props){
    const handleClick = () => {
        return 
      }
      const handleSubmit = () => {
  
        return
      }
    return(
        <>
          <StepTwoContenair>
              <label>Dentro da sua area de mentoria, escolha os tópicos você gostaria de ensinar?</label>    
              <StepTags>
                <Buttons className={""} handleClick={props.navigation.previous} label={"UX Design"} />
                <Buttons className={""} handleClick={props.navigation.previous} label={"UX Research"} /> 
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UI Design"} />
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UX Design"} />
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UX Research"} /> 
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UI Design"} />
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UX Design"} />
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UX Research"} /> 
                <Buttons className={"tag"} handleClick={props.navigation.previous} label={"UI Design"} />
              </StepTags>
              <StepTwoAction>
                 
                  <Buttons className={"next"} handleClick={props.navigation.previous} label={"Voltar"} /> 
                  <Buttons className={"btn btn-warning"} handleClick={props.navigation.next} label={"Próximo"} /> 
                  
              </StepTwoAction>
          </StepTwoContenair>
        </>
    )
}