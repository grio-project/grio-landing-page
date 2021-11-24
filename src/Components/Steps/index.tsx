import React from 'react'
import { StepContainer, StepLabel, StepLine, StepSpan } from './style'

type Props = {
    labelOne: any,
    labelTwo: string,
}


export default function Steps(props: Props) {
    return (
        <>
            <StepContainer>
                <StepLabel>
                    <label>{props.labelOne}</label>
                    
                        <span> Você</span>
                    
                </StepLabel>
                <StepLine />
                <StepLabel>
                    <label>{props.labelTwo}</label>
                    <span>Mentoria</span>
                </StepLabel>
            </StepContainer>
        </>
    )
}