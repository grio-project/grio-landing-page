import React from 'react'
import SelectInput from '../../SelectInput'
import Buttons from '../../Buttons'
import SimpleInput from '../../SimpleInput'
import { StepOneContenair, StepOneActions, StepOneForm } from './style'
import Step from '../../Steps'
import { collection, getDocs } from "firebase/firestore"

type Props = {
    navigation: any,
    isMentor: any,
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
                <Step active="active" active2="" active3="" />
                <StepOneForm>

                    <label>Qual seu nome?</label>
                    <SimpleInput placeholder={"Digite seu nome"} name={"nome"} />

                    <label>Qual seu melhor email?</label>
                    <SimpleInput placeholder={"Digite seu email"} name={"email"} />

                    <label>O que você quer aprender?</label>
                    <SimpleInput placeholder={"Que area você quer aprender?"} name={"aprender"} />

                    <label>Qual gênero você se identifica?</label>
                    <SimpleInput placeholder={"Como você se identifica?"} name={"genero"} />
                    
                    <label>Qual sua profissão?</label>
                    <SimpleInput placeholder={"Com o que você trabalha?"} name={"trabalho"} />

                    <label>Qual sua senioridade?</label>
                    <SimpleInput placeholder={"Qual seu nível?"} name={"senioridade"} />

                    {props.isMentor ? <>
                        <label>Qual áreas voce quer mentorar?</label>
                        <SelectInput placeholder={"Selecione as áreas?"} valueSelect={""} /> 
                        <label>Qual nível voce quer mentorar?</label>
                        <SelectInput placeholder={"Selecione o nível"} valueSelect={""} /></> : ''}

                    <label>Conte um pouco mais sobre você:</label>
                    <SimpleInput placeholder={"Queremos conhecer você!"} name={"voce"} />

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