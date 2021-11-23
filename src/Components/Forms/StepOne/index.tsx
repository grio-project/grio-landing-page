import React from 'react' 
import RadioButton from '../../RadioButton' 
import SelectInput from '../../SelectInput' 
import Buttons from '../../Buttons' 
import SimpleInput from '../../SimpleInput' 
import { StepOneContenair, StepOneActions, StepOneForm} from './style' 
 
type Props = { 
    navigation: any, 
} 
 
 
export default function StepOne(props: Props){ 
    const handleClick = () => { 
        return  
      } 
      const handleSubmit = () => { 
   
        return 
      } 
    return( 
        <> 
            <StepOneContenair >     
                <StepOneForm> 
                     
                    <label>Qual seu nome?</label> 
                    <SimpleInput placeholder={"Placeholder"} name={"nome"} /> 
                     
                     
                    <label>Qual seu melhor email?</label> 
                    <SimpleInput placeholder={"Placeholder"} name={"email"} /> 
                     
                 
                    <label>Qual tema você quer mentorar ?</label> 
                    <SelectInput placeholder={"Placeholder"} valueSelect={"Não sei o que escrever"} /> 
 
                    <label>Quais niveis você quer mentorar ?</label> 
                    <SelectInput placeholder={"Placeholder"} valueSelect={"Não sei o que escrever"} /> 
 
            
 
                    <label>Qual gênero você se identifica ?</label> 
                    <SelectInput placeholder={"Placeholder"} valueSelect={"Não sei o que escrever"} /> 
                     
                    <label>Conte um pouco mais sobre você:</label> 
                    <SimpleInput placeholder={"Placeholder"} name={"senha"} /> 
                     
 
                    <RadioButton valueButton={"Não sei o que escrever"} label={"Aceito os termos de uso e politicas de privacidade"} /> 
                    
                    <RadioButton valueButton={"Não sei o que escrever"} label={"Me declaro uma pessoa preta"}/> 
  
                     
                             
                    <StepOneActions> 
                        <Buttons className={"next"} handleClick={props.navigation.previous} label={"Voltar"} /> 
                        <Buttons className={"btn btn-warning"} handleClick={props.navigation.next} label={"Próximo"} /> 
                    </StepOneActions> 
                </StepOneForm> 
            </StepOneContenair> 
                 
        </> 
    ) 
}        