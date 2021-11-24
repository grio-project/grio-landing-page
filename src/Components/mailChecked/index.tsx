import React from 'react'
import { ReactComponent as Checked } from '../../assets/photos/pana.svg'
import { MailCheckedContainer } from './style'

type Props = {
    navigation: any,
  
  }

export default function MailChecked(props: Props) {

    const handleMentee = () => {
        return ""
    }
    const handleMentor = () => {
        return ""

    }

    return (
        <MailCheckedContainer>
            <Checked/>
            <h1> Aguarde nosso email </h1>
            <p>Em breve entraremos em contato com você por email para informar a validação do seu cadastro.</p>
        </MailCheckedContainer>
    )
}