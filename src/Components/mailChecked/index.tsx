import React from 'react'
import { ReactComponent as Checked } from '../../assets/photos/pana.svg'
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
            <Checked/>
            <h1> Seu perfil foi enviado para aprovação! </h1>
            <p>Em breve entraremos em contato com você por email para informar a validação do seu cadastro.</p>
        </MailCheckedContainer>
    )
}