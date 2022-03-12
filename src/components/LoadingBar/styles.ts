import styled from 'styled-components';

export const BarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background: #d4efd0;
  border-radius: 20px;
  margin: 8px 0 24px;
  overflow: hidden;
`;

export const BarFilling = styled.div<{percentage: number}>`
  width: ${(props) => props.percentage}%;
  height: 20px;
  background: #00b797;
  border-radius: 20px;
  position: relative;

  transition: width 0.5s ease-out;

  font-size: 14px;
  color: white;
`;

export const CountUpWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 10px;
    top: 2px;
  }
`;

export default {};