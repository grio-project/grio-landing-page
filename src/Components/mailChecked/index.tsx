import React from 'react'
import { ReactComponent as People } from '../../assets/photos/people.svg'
import Buttons from '../Buttons'
import { MailCheckedContainer } from './style'

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
        <MailCheckedContainer>
            <People />
            <h1> Tudo certo, Fulano! </h1>
            <p>Agora é só encontrar sua pessoa mentora na Griô!</p>
            <div>
                <Buttons className={"btn btn-warning"} label={"Quero ser mentorade!"} handleClick={handleMentee} />
            </div>
        </MailCheckedContainer>
    )
}