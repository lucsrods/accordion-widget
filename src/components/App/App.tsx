import React, { useContext } from 'react';

import { TasksContext } from '@contexts/TasksContext';
import Accordion from '@components/Accordion';
import LoadingBar from '@components/LoadingBar';

import { Box, Container, Header } from './styles';
import { Group } from '@customTypes/Group';

function App() {
  const {
    computedData,
    groups,
    isLoading
  } = useContext(TasksContext);

  return (
    <Container>
      <Box>
        <Header>
          <h2>Lodgify Grouped Tasks</h2>
          <LoadingBar total={computedData?.gTotal ?? 0} completed={computedData?.gCompleted ?? 0} />
        </Header>
        <div>
          {!isLoading && groups.map((group: Group, groupIndex: number) => <Accordion key={groupIndex} group={group} groupIndex={groupIndex} />)}
        </div>
      </Box>
    </Container>
  );
}

export default App;
