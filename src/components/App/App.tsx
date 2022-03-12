import Accordion from '../Accordion';

import { Box, Container } from './styles';

function App() {
  return (
    <Container>
      <Box>
        <h2>Lodgify Grouped Tasks</h2>
        <Accordion groupName="Group 1" />
      </Box>
    </Container>
  );
}

export default App;
