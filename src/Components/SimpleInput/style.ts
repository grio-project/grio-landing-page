import styled from 'styled-components';

export const SimpleInputContainer = styled.div`
      width: 100%;

      input{
       &::placeholder {
        font-size: 16px;
        color: #C7C9C7;
        font-weight: 400;
        
      }  
        &:-webkit-autofill {
          box-shadow: 0 0 0 30px white inset;
        }
      }

      .text-area{
        height: 100px;
        border: 1px solid #D6D7DA;
        border-radius: 4px;
        padding: 8px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        color: #666666;
        font-weight: normal;
        color: #D6D7DA;
      }

      .simple-input {
        height: 38px;
        border: 1px solid #D6D7DA;
        border-radius: 4px;
        padding: 8px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-weight: normal;
        color: #D6D7DA;
        margin: 0;
      }
`;