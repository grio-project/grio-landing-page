import Buttons from "../../Buttons";
import { StepTwoContainer, StepTwoAction, StepTags, StepLabel } from "./style";
import Step from "../../Steps";

type Props = {
  formData: any;
  navigation: any;
  isMentor: any;
  updateFormDataField: any;
};

export default function StepTwo(props: Props) {
  const { topicosTag } = props.formData;

  return (
    <>
      <StepTwoContainer>
        <Step active="active" active2="active " active3=" " />
        <StepLabel>
          <label>
            Dentro da sua área de mentoria, escolha os tópicos você gostaria de{" "}
            {props.isMentor ? "ensinar" : "estudar"}?
          </label>
        </StepLabel>
        <StepTags>
          <Buttons
            disabled=""
            value={topicosTag}
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Design"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Research"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UI Design"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Design"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Research"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UI Design"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Design"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UX Research_for_designers"}
          />
          <Buttons
            value={topicosTag}
            disabled=""
            className={"tag"}
            handleClick={(e: any) =>
              props.updateFormDataField("topicosTag", e.target.value)
            }
            label={"UI/UX"}
          />
        </StepTags>
        <StepTwoAction>
          <Buttons
            value=""
            disabled=""
            className={"next"}
            handleClick={props.navigation.previous}
            label={"Voltar"}
          />
          <Buttons
            value=""
            disabled=""
            className={"btn btn-warning"}
            handleClick={props.navigation.next}
            label={"Finalizar"}
          />
        </StepTwoAction>
      </StepTwoContainer>
    </>
  );
}
