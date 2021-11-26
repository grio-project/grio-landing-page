import React, { useState } from "react";
import { SimpleInputContainer } from "./style";

type Props = {
  placeholder: string;
  handleValue: any;
  value: string;
  isTextArea: boolean;
};

export default function SimpleInput(props: Props) {
  return (
    <SimpleInputContainer>
      {props.isTextArea ? (
        <input
          className="text-area"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleValue}
          type="text"
          required
          minLength={3}
        />
      ) : (
        <input
          className="simple-input"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleValue}
          type="text"
          required
          minLength={3}
        />
      )}
    </SimpleInputContainer>
  );
}
