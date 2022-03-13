import styled, { keyframes, css } from 'styled-components';

export const HeaderSkeleton = styled.header`
  margin: 0 16px;
`;

export const loading = keyframes`
  to {
    background-position: 600px 0, 0 0, 0 190px, 50px 195px;
  }
`;

export const backgroundAnimation = css`
    background: 
      linear-gradient(0.25turn, transparent, #dbdbdb, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);  
    background-repeat: no-repeat;
    background-position: -600px 0, 0 0, 0px 190px, 50px 195px;
    animation: ${loading} 5s infinite;
`;

export const LoadingBarSkeleton = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 20px;
  margin: 8px 0 24px;
  overflow: hidden;
  position: relative;
  ${backgroundAnimation};
`;

export const AccordionListSkeleton = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AccordionItemSkeleton = styled.li`
  height: 48px;
  border: 1px solid #ddd;
  border-bottom: 0;
  position: relative;

  &::before {
    position: absolute;
    top: 14px;
    left: 16px;
    content: "";
    width: 50%;
    height: 20px;
    ${backgroundAnimation};
  }

  &::after {
    position: absolute;
    top: 14px;
    right: 16px;
    content: "";
    width: 15%;
    height: 20px;
    ${backgroundAnimation};
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid #ddd;
    border-radius: 0 0 8px 8px;
  }
`;