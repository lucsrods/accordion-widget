import React from 'react';

import { ErrorMessageWrapper } from './styles';

const ErrorMessage = () => {
  return (
    <ErrorMessageWrapper>
      <span>
        ಥ﹏ಥ
      </span> 
      <header>
        <h1>Something wrong happened</h1>
        <p>Try again later</p>
      </header>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;