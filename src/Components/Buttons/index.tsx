import { ButtonsContainer } from "./style";

type Props = {
  handleClick: any;
  label: string;
  className: string;
  disabled: any;
  value: any;
};

export default function Buttons(props: Props) {
  return (
    <ButtonsContainer>
      <button
        disabled={props.disabled}
        onClick={props.handleClick}
        type="button"
        className={props.className}
      >
        {props.label}
      </button>
    </ButtonsContainer>
  );
}
