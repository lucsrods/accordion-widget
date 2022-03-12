import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00b797;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: white;
  width: 400px;

  div {
    &:first-child {
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-radius: 0 0 8px 8px;
      border-bottom: 1px solid #ddd;
    }
  }
`;
