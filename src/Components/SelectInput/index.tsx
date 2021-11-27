import React from "react";
import { SelectInputContainer } from "./style";

type Props = {
  placeholder: any;
  options: string[];
  handleValue: any;
};

export default function SelectInput(props: Props) {
  const items = [];

  for (const value of props.options) {
    items.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  }

  return (
    <SelectInputContainer>
      <div className="form-group">
        <select
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.handleValue}
          required
        >
          {items}
        </select>
      </div>
    </SelectInputContainer>
  );
}
