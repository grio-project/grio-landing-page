import styled from 'styled-components';

export const SelectIputContainer = styled.div`

      width: 100%;
      height: 38px;
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
