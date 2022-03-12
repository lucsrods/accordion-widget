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

export const AccordionContent = styled.ul`
  list-style: none;
  padding: 0;

  &.hide {
    display: none;
 }

  &.show {
    display: block;
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

export default {};
