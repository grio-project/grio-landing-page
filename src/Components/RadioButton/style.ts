import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
.modern-radio-container {
    margin: 24px 0;
    display: flex;
    cursor: pointer;
    user-select: none;
  }
  
  .radio-outer-circle {
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    border: 2px solid #0d5bc6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    transition: all 0.1s linear;
  }
  
  .radio-inner-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #0d5bc6;
    transition: all 0.1s linear;
  }
  .unselected {
    border: 2px solid #666;
  }
  .unselected-circle {
    width: 0;
    height: 0;
  }
  .helper-text {
    color: #666;
    padding-right: 8px;
  }
  
`;
