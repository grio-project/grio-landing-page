import { ReactComponent as People } from '../../assets/photos/people.svg'
import Buttons from '../Buttons'
import { InitialContainer } from './style'

type Props = {
    navigation: any,
}
export default function Initial(props: Props) {
    return (
        <InitialContainer>
            <People />
            <h1> Você quer mentorar ou ser mentorade? </h1>
            <p>Griô é um espaço Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div>
                <Buttons className={"btn btn-warning"} label={"Quero mentorar"} handleClick={props.navigation.next} />
                <Buttons className={"btn btn-warning"} label={"Quero ser mentorade"} handleClick={props.navigation.next} />
            </div>
        </InitialContainer>
    )
}