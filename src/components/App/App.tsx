import React, { useContext } from 'react';

import { TasksContext } from '@contexts/TasksContext';
import Accordion from '@components/Accordion';
import LoadingBar from '@components/LoadingBar';

import { Box, Container, Header } from './styles';
import { Group } from '@customTypes/Group';
import Skeleton from '@components/Skeleton';
import ErrorMessage from '@components/ErrorMessage';

function App() {
  const {
    computedData,
    error,
    groups, isLoading
  } = useContext(TasksContext);
  const hasError = Boolean(error);

  return (
    <Container>
      <Box>
        {hasError && (
          <ErrorMessage />
        )}

        {!hasError && isLoading && (
          <Skeleton />
        )}

        {!isLoading && !hasError && (
          <>
            <Header>
              <h2>Lodgify Grouped Tasks</h2>
              <LoadingBar total={computedData?.gTotal ?? 0} completed={computedData?.gCompleted ?? 0} />
            </Header>
            <div>
              {groups.map((group: Group, groupIndex: number) => <Accordion key={groupIndex} group={group} groupIndex={groupIndex} />)}
            </div>
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
