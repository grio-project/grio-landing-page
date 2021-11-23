import React, { useState } from 'react'
import { useStep } from 'react-hooks-helper'
import Initial from '../Initial';
import StepOne from './StepOne'
import StepTwo from './StepTwo'


const defaultData = {
    nome: "",
    email: "",
    senha: "",
    tema: "",
    nivel: "",
    estados: "",
    cidade: "",
    genero: "",
    sobre: "",
    termo:"",
    declaracao:""
};

interface useStepType {
    step: any,
    navigation: any,
}

const steps = [
    { id: "aboutYou" },
    { id: "aboutYou2" },
    { id: "aboutYourMentoring" },
];

export default function Forms() {
    const [formData, setFormData] = useState();
    const { step, navigation }: useStepType = useStep({
        steps,
        initialStep: 0
    })

    // const updateFormDataField = (field: any, value: any) => {
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [field]: value,
    //     }))
    //   }

    const props = { formData, setFormData, navigation }

    switch (step.id) {
        case "aboutYou":
            return <Initial  {...props}/>;
        case "aboutYou2":
            return <StepOne {...props} />;
        case "aboutYourMentoring":
            return <StepTwo {...props} />;
    }

    return(
        <>
        Steps
        </>
    )
}