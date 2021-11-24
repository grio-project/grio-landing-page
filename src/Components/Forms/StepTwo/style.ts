import styled from 'styled-components';

export const StepTwoContenair = styled.div`
  width: 100%;
  height: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  color: #666666;
  


  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const StepTwoAction = styled.div`

  display: flex;
  width: 100%;
  margin-top: 24px;
  

  justify-content: center;
  button{
    width: 230px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 8px;
    margin:20px;
  }
  .next{
    color: #606C36;
    border-radius: 8px;
    border: 1px solid #606C36;

  }
  @media(max-width:760px){
    button{
      width: 130px;
      height: 48px;
      box-sizing: border-box;
      border-radius: 8px;
      margin:20px;
    }
  }

`;
export const StepLabel =  styled.div`
  margin-top: 50px;

`
export const StepTags =  styled.div
    `
    display: flex;
    width: 50%;
    height: auto;
    flex-wrap: wrap;
    padding:6px;
   
  
 
    
    background: #FFFFFF;

    button{

      width: auto;
      height: 48px;
      border: 1px solid #666666;
      box-sizing: border-box;
      border-radius: 15px;
      color: #666666;
      margin: 6px;
    }
    
  
   
    
    `;