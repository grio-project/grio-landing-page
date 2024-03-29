import styled from "styled-components";

export const StepOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  color: #666666;

  width: 100%;
  height: 100%;

  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 8px;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

export const StepOneActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;

  button {
    width: 230px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .next {
    color: #606c36;
    border-radius: 8px;
    margin: 10px;
    border: 1px solid #606c36;
  }
  @media (max-width: 760px) {
    button {
      width: 130px;
      height: 48px;
      font-size: 12px;
      box-sizing: border-box;
      border-radius: 8px;
      margin: 20px;
    }
    @media (max-width: 400px) {
      button {
        width: 80px;
        height: 48px;
        font-size: 12px;
        box-sizing: border-box;
        border-radius: 8px;
        margin: 20px;
      }
    }
  }
`;

export const StepOneForm = styled.form`
  width: 50%;
  margin-top: 50px;
  label {
    margin-top: 10px;
  }
  span {
    width: 200px;
  }
`;
