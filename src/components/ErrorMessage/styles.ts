import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  header {
    text-align: center;
  }

  h1 {
    color: #00b797;
    margin-top: 0;
  }

  span {
    font-size: 3rem;
  }
`;