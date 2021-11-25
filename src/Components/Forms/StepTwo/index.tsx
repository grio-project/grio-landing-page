import React from 'react'
import Buttons from '../../Buttons'
import RadioButton from '../../RadioButton'
import SelectInput from '../../SelectInput'
import SimpleInput from '../../SimpleInput'
import { StepTwoContenair, StepTwoAction, StepTags, StepLabel} from './style'
import Step from '../../Steps'
import Icon from '../../../assets/photos/icon.svg'

type Props = {
  formData:any,   
  navigation: any,
  isMentor: any,
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
              <Step active="active" active2="active " active3=" " />
                <StepLabel>
                   <label>Dentro da sua área de mentoria, escolha os tópicos você gostaria de {props.isMentor ? "ensinar" : "estudar" }?</label>    
                </StepLabel>
              <StepTags>
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Design"} />
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Research"} /> 
                <Buttons className={"tag"} handleClick={handleClick} label={"UI Design"} />
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Design"} />
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Research"} /> 
                <Buttons className={"tag"} handleClick={handleClick} label={"UI Design"} />
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Design"} />
                <Buttons className={"tag"} handleClick={handleClick} label={"UX Research_for_designers"} /> 
                <Buttons className={"tag"} handleClick={handleClick} label={"UI/UX"} />
              </StepTags>
              <StepTwoAction>
                 
                  <Buttons className={"next"} handleClick={props.navigation.previous} label={"Voltar"} /> 
                  <Buttons className={"btn btn-warning"} handleClick={props.navigation.next} label={"Finalizar"} /> 
                  
              </StepTwoAction>
          </StepTwoContenair>
        </>
    )
}