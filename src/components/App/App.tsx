import useTasks from '../../hooks/useTasks';
import Accordion from '../Accordion';

import { Box, Container } from './styles';

type Group = {
  name: string;
  tasks: Array<{ description: string; value: number; checked: boolean }>;
}

function App() {
  const { data, isLoading } = useTasks();

  return (
    <Container>
      <Box>
        <h2>Lodgify Grouped Tasks</h2>

        <div>
          {!isLoading && (
            data.map((group: Group) => (
              <Accordion
                key={group.name}
                groupName={group.name}
                tasks={group.tasks}
              />
            ))
          )}
        </div>
      </Box>
    </Container>
  );
}

export default App;
