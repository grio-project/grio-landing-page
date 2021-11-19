import React from 'react'
import { ReactComponent as People } from '../../assets/photos/people.svg'
import Buttons from '../Buttons'
import { InitialContainer } from './style'

type Props = {
    navigation: any,
}
export default function Initial(props: Props) {

    const handleMentee = () => {
        return ""
    }
    const handleMentor = () => {
        return ""

    }

    return (
        <InitialContainer>
            <People />
            <h1> Você quer mentorar ou ser mentorade? </h1>
            <p>Griô é um espaço Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div>
                <Buttons label={"Quero mentorar"} handleClick={props.navigation.next} />
                <Buttons label={"Quero ser mentorade"} handleClick={handleMentee} />
            </div>
        </InitialContainer>
    )
}