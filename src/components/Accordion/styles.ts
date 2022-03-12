import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 0 16px; 
`;

export const AccordionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    display: inline;
  }

  button {
    color: #999999;
    padding: 0;
    margin: 0;
    border: 0;
    background: 0;
    height: fit-content;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const AccordionContent = styled.ul<{ height: number }>`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  &.hide {
    height: 0;
    transition: height 0.4s ease-in-out;
 }

  &.show {
    height: ${({height}) => height}px;
    transition: height 0.4s ease-in-out;
  }

  li {
    padding: 8px 0;

    input {
      margin-right: 16px;
    }

    * {
      display: inline;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;

export default {};
