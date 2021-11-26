import React, { useState, useEffect } from "react";
import SelectInput from "../../SelectInput";
import Buttons from "../../Buttons";
import Select from "react-select";
import SimpleInput from "../../SimpleInput";
import { StepOneContainer, StepOneActions, StepOneForm } from "./style";
import Step from "../../Steps";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../../../services/firebase.config";
//import { getAreas } from '../../../services';

type Props = {
  navigation: any;
  isMentor: any;
  updateFormDataField: any;
  formData: any;
};

export default function StepOne(props: Props) {
  var initial: string[] = [];
  const [categories, setCategories] = useState(initial);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const {
    nome,
    email,
    aprenderEnsinar,
    genero,
    profissao,
    senioridade,
    area,
    nivelMentorar,
    sobreVoce,
  } = props.formData;

  const handleClick = () => {
    return;
  };
  const handleSubmit = () => {
    return;
  };

  const updateAreas = () => {
    if (isInitialRender) {
      var items: string[] = [];
      const c = collection(firestore, "areas");
      getDocs(c).then((areaSnapshot) => {
        areaSnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          items.push(doc.id);
        });
        setCategories(items);
      });
      setIsInitialRender(false);
    }
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    updateAreas();
  });

  return (
    <>
      <StepOneContainer>
        <Step active="active" active2="" active3="" />
        <StepOneForm>
          <label>Qual seu nome?</label>
          <SimpleInput
            isTextArea={false}
            placeholder={"Digite seu nome"}
            value={nome}
            handleValue={(e: any) =>
              props.updateFormDataField("nome", e.target.value)
            }
          />

          <label>Qual seu melhor email?</label>
          <SimpleInput
            isTextArea={false}
            placeholder={"Digite seu email"}
            value={email}
            handleValue={(e: any) =>
              props.updateFormDataField("email", e.target.value)
            }
          />

          {!props.isMentor ? (
            <>
              <label>O que você quer aprender?</label>
              <SelectInput
                placeholder={"Que area você quer aprender?"}
                options={categories}
                handleValue={(e: any) =>
                  props.updateFormDataField("aprenderEnsinar", e.target.value)
                }
              />
            </>
          ) : (
            ""
          )}

          <label>Qual gênero você se identifica?</label>
          <SimpleInput
            isTextArea={false}
            placeholder={"Como você se identifica?"}
            value={genero}
            handleValue={(e: any) =>
              props.updateFormDataField("genero", e.target.value)
            }
          />

          <label>Qual sua profissão?</label>
          <SimpleInput
            isTextArea={false}
            placeholder={"Com o que você trabalha?"}
            value={profissao}
            handleValue={(e: any) =>
              props.updateFormDataField("profissao", e.target.value)
            }
          />

          <label>Qual sua senioridade?</label>
          <SimpleInput
            isTextArea={false}
            placeholder={"Qual seu nível?"}
            value={senioridade}
            handleValue={(e: any) =>
              props.updateFormDataField("senioridade", e.target.value)
            }
          />

          {props.isMentor ? (
            <>
              <label>Qual área você quer mentorar?</label>
              <SelectInput
                placeholder={"Que area você quer ensinar?"}
                options={categories}
                handleValue={(e: any) =>
                  props.updateFormDataField("area", e.target.value)
                }
              />

              <label>Qual nível você quer mentorar?</label>
              <SelectInput
                placeholder={"Selecione o nível"}
                options={["junin", "plenin", "oldfart"]}
                handleValue={(e: any) =>
                  props.updateFormDataField("nivelMentorar", e.target.value)
                }
              />
            </>
          ) : (
            ""
          )}

          <label>Conte um pouco mais sobre você:</label>
          <SimpleInput
            isTextArea={true}
            placeholder={"Queremos conhecer você!"}
            value={sobreVoce}
            handleValue={(e: any) =>
              props.updateFormDataField("sobreVoce", e.target.value)
            }
          />

          {/* <RadioButton valueButton={"aceito"} label={"Aceito os termos de uso e politicas de privacidade"} />

                    <RadioButton valueButton={"pessoPreta"} label={"Me declaro uma pessoa preta"} /> */}

          <StepOneActions>
            <Buttons
              disabled=""
              className={"next"}
              handleClick={props.navigation.previous}
              label={"Voltar"}
              value=""
            />
            <Buttons
              className={"btn btn-warning"}
              handleClick={props.navigation.next}
              label={"Próximo"}
              value=""
              disabled={
                !nome ||
                !email ||
                !genero ||
                !profissao ||
                !senioridade ||
                !sobreVoce
              }
            />
          </StepOneActions>
        </StepOneForm>
      </StepOneContainer>
    </>
  );
}
