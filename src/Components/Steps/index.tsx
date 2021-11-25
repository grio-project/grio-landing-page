import React from 'react'
import { StepContainer } from './style'

type Props = {
    active:string,
    active2:any,
    active3:any,
}


export default function Steps(props: Props) {
    return (
        <>
           <StepContainer>
                <div className="container">
                    <ul className="progressbar">
                        <li className={props.active}>Sobre você</li>
                        <li className={props.active2}>Sobre a mentoria</li>
                        <li className={props.active3}>Confirmação</li>

                    </ul>
                </div>
            </StepContainer>
        </>
    )
}