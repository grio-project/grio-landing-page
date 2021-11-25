import { ButtonsContainer } from './style'

type Props = {
  handleClick: () => void, 
  label: string,
  className:string
}

export default function Buttons(props: Props) {
  return (
    <ButtonsContainer>
        
        <button onClick={props.handleClick} type="button" className={props.className}>{props.label}</button>
       
    </ButtonsContainer>
  )
}