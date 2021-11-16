import styled from 'styled-components';

export const SelectIputContainer = styled.div`
     
      padding: 8px;
      display: block;
      width: 100%;
      height: 38px;
      box-sizing: border-box;
      color: $gray_dark1;
      margin: 0;
  
      &::placeholder {
        font-size: 14px;
        color: #a7b0be;
      }
  
      &:-webkit-autofill {
        box-shadow: 0 0 0 30px white inset;
      }
`;
