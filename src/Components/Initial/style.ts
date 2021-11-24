import styled from 'styled-components'

export const InitialContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
color: #666666;
position: relative;
width: 100%;
height: 576px;
font: Mulish;

background: #FFFFFF;
border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 8px;
 
button{
    width: 484px;
    height: 48px;
    background: #FFC727;
    border-radius: 8px;
    margin:10px;

  }
  @media(max-width:760px){
    button{
      width: 100%;
      font:16px;
      height: 48px;
      background: #FFC727;
      border-radius: 8px;
      margin:10px;
  
    }
  }
`;