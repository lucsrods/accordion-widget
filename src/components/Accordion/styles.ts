import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 0 16px; 
  border-bottom: 0;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid #ddd;
    border-radius: 0 0 8px 8px;
  }
`;

export const AccordionHeader = styled.header<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-weight: 400;
    color: ${({ completed }) => completed ? '#00b797' : '#000'};
    
    span {
      margin-left: 8px;
    }
  }

  > * {
    display: inline;
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
    padding: 12px 0;

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

  input {
    transform: scale(1.2);
    filter: hue-rotate(310deg) saturate(2);
  }
`;

export const ToggleText = styled.span<{ isAccordionOpen: boolean }>`
  color: #999999;
  margin-right: 8px;

  &::after {
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    right: -8px;
    top: ${({ isAccordionOpen }) => isAccordionOpen ? '6': '2'}px;
    position: relative;
    transform: rotate(${({ isAccordionOpen }) => isAccordionOpen ? '-45': '130'}deg);
    vertical-align: top;
    width: 0.45em;
  }
`;

export default {};
