import styled from 'styled-components';

export const CheckboxButtonContainer = styled.div`
  input {
    visibility: hidden;

    &:checked {
      + label {
        background-color: #606C36;
        color: #FFF;
      }
    }
  }

  label {
    align-items: center;
    background-color: #FFF;
    border-radius: 32px;
    border: 1px solid #666;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0;
    margin: 8px;
    padding: 16px;
    transition: all .2s ease-in-out;
  }
 
`;

