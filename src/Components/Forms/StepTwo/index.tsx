import React, { useState, useEffect } from "react";
import CheckBoxButton from "../../CheckBoxButton";
import Buttons from "../../Buttons";
import { StepTwoContainer, StepTwoAction, StepTags, StepLabel } from "./style";
import Step from "../../Steps";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../../services/firebase.config";

type Props = {
  formData: any;
  navigation: any;
  isMentor: any;
  updateFormDataField: any;
};

export default function StepTwo(props: Props) {
  const {
    nome,
    email,
    genero,
    profissao,
    senioridade,
    area,
    nivelMentorar,
    sobreVoce,
  } = props.formData;
  var initial = new Set();
  const [checkboxes, setCheckboxes] = useState([]);
  const [tags] = useState(initial);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleSubmit = () => {
    console.log({ form: props.formData, tagList: tags });
    setDoc(
      doc(
        firestore,
        props.isMentor ? "mentor-formulario-cadastro" : "formulario-cadastro",
        email
      ),
      {
        email: email,
        name: nome,
        gender: genero,
        job_title: profissao,
        seniority: senioridade,
        area: area,
        sub_areas: Array.from(tags),
        mentee_seniority: nivelMentorar,
        about: sobreVoce,
      }
    ).then(props.navigation.next);
  };

  const updateTags = async () => {
    if (isInitialRender) {
      const docRef = doc(firestore, "areas", area);
      getDoc(docRef).then((res) => setCheckboxes(res?.data()?.tags));
      setIsInitialRender(false);
    }
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    updateTags();
  }, [updateTags]);
  updateTags();
  const handleTagList = (tag: string) => {
    tags.has(tag) ? tags.delete(tag) : tags.add(tag);
  }

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
          {checkboxes.map((checkItem) => (
            <CheckBoxButton
              id={`check_${Math.random()}`}
              getValue={(e) => handleTagList(e)}
              label={checkItem}
            />
          ))}
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
            handleClick={handleSubmit}
            label={"Finalizar"}
          />
        </StepTwoAction>
      </StepTwoContainer>
    </>
  );
}
