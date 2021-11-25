import React, { useState } from 'react'
import { useStep } from 'react-hooks-helper'
import Initial from '../Initial';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import MailChecked from '../MailChecked';

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
    { id: "initial" },
    { id: "aboutYou" },
    { id: "aboutYourMentoring" },
    { id: "sendData" },
];

export default function Forms() {
    const [formData, setFormData] = useState();
    const { step, navigation }: useStepType = useStep({
        steps,
        initialStep: 0
    })
    const [isMentor, setIsMentor] = useState<Boolean>(false);

    // const updateFormDataField = (field: any, value: any) => {
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [field]: value,
    //     }))
    //   }
    const props = { formData, setFormData, navigation, isMentor, setIsMentor }

    switch (step.id) {
        case "initial":
            return <Initial  {...props}/>;
        case "aboutYou":
            return <StepOne {...props} />;
        case "aboutYourMentoring":
            return <StepTwo {...props} />;
        case "sendData":
            return <MailChecked {...props} />;
    }

    return(
        <>

         Steps
        </>
    )
}