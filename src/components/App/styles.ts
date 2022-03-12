import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background:
  radial-gradient(#00b797 15%, transparent 16%) 0 0,
  radial-gradient(#00b797 15%, transparent 16%) 8px 8px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-color:#00b797d4;
  background-size:16px 16px; 
`;

export const Box = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: white;
  width: 600px;
`;

export const Header = styled.header`
  padding: 24px 24px 0;

  h2 {
    margin: 0;
  }
`;