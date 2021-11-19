import styled from 'styled-components';

export const StepTwoContenair = styled.div`
     
     
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;

  
  width: 548px;
  height: 520px;
  left: 366px;
  top: 144px;

  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 8px;


  
  text-align: center;
  
      &::placeholder {
        font-size: 14px;
        color: #a7b0be;
      }
  
      &:-webkit-autofill {
        box-shadow: 0 0 0 30px white inset;
      }
`;
export const StepTwoAction = styled.div`

display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;

  button{
    width: 230px;
    height: 48px;
  }

`
