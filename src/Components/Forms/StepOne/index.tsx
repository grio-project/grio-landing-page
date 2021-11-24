import React from 'react'
import RadioButton from '../../RadioButton'
import SelectInput from '../../SelectInput'
import Buttons from '../../Buttons'
import SimpleInput from '../../SimpleInput'
import { StepOneContenair, StepOneActions, StepOneForm } from './style'
import Step from '../../Steps'

type Props = {
    navigation: any,
}


export default function StepOne(props: Props) {
    const handleClick = () => {
        return
    }
    const handleSubmit = () => {

        return
    }
    return (
        <>
            <StepOneContenair >
                <Step labelOne="1" labelTwo="2" />
                <StepOneForm>

                    <label>Qual seu nome?</label>
                    <SimpleInput placeholder={"Placeholder"} name={"nome"} />


                    <label>Qual seu melhor email?</label>
                    <SimpleInput placeholder={"Placeholder"} name={"email"} />

                    <label>Qual gênero você se identifica ?</label>
                    <SelectInput placeholder={"Placeholder"} valueSelect={"genero"} />

                    <label>Conte um pouco mais sobre você:</label>
                    <SimpleInput placeholder={"Placeholder"} name={"voce"} />


                    {/* <RadioButton valueButton={"aceito"} label={"Aceito os termos de uso e politicas de privacidade"} />

                    <RadioButton valueButton={"pessoPreta"} label={"Me declaro uma pessoa preta"} /> */}



                    <StepOneActions>
                        <Buttons className={"next"} handleClick={props.navigation.previous} label={"Voltar"} />
                        <Buttons className={"btn btn-warning"} handleClick={props.navigation.next} label={"Próximo"} />
                    </StepOneActions>
                </StepOneForm>
            </StepOneContenair>

        </>
    )
}