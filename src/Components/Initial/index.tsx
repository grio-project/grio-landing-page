import { ReactComponent as People } from '../../assets/photos/people.svg'
import Buttons from '../Buttons'
import { InitialContainer } from './style'

type Props = {
    navigation: any,
    isMentor: any,
    setIsMentor: any,
}
export default function Initial(props: Props) {
    const handleMentee = () => {
        props.setIsMentor(true)
        props.navigation.next()
    }
    const handleMentor = () => {
        props.setIsMentor(false)
        props.navigation.next()
    }

    return (
        <InitialContainer>
            <People />
            <h1> Você quer mentorar ou ser mentorade? </h1>
            <p>Griô é um espaço Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div>
                <Buttons className={"btn btn-warning"} label={"Quero mentorar"} handleClick={handleMentee} />
                <Buttons className={"btn btn-warning"} label={"Quero ser mentorade"} handleClick={handleMentor} />
            </div>
        </InitialContainer>
    )
}