import styled from "styled-components";

export const StepContainer = styled.div`
width:50%;
height:50px;
justify-content: center;
align-items: center;
display: flex;
justify-content: space-around;

`;

export const StepLabel = styled.div`
width: 30.85px;
height: 29px;
background: #606C36;
border-radius:50%;

label{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:3px;
    color: #FFFFFF;
}


`;
export const StepSpan = styled.div`
    width: 100px;
    background:red;
    right:20px;
`
;
export const StepLine = styled.p`
    width: 150px;
    border: 1px solid #D6D7DA;
    margin-top: 3%;

    @media(max-width: 982px ){
    width: 80px;
    border: 1px solid #D6D7DA;
    margin-top: 3%;
    }
    @media(max-width: 770px){
    width: 50px;
    border: 1px solid #D6D7DA;
    margin-top: 3%;
    }
    @media(max-width: 600px){
        width: 45px;
        border: 1px solid #D6D7DA;
        margin-top: 1%;
        }
    @media(max-width: 530px){
        width: 30px;
        border: 1px solid #D6D7DA;
        margin-top: 1%;
        }
    
        @media(max-width: 479px){
            width: 20px;
            border: 1px solid #D6D7DA;
            margin-top: 1%;
            }
`;