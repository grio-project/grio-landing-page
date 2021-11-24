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
              <Step labelOne="1" labelTwo="2" labelThree="3" />
                <StepLabel>
                   <label>Dentro da sua area de mentoria, escolha os tópicos você gostaria de ensinar?</label>    
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