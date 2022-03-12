import React, { useContext, useState } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { AccordionContent, AccordionHeader, AccordionWrapper, Label } from './styles';

type Props = {
  groupIndex: number;
  group: {
    name: string;
    tasks: Array<{ description?: string; value: number; checked: boolean; name?: string }>;
  } 
}

const LINE_HEIGHT = 36;

function Accordion({
  groupIndex,
  group
}: Props) {
  const { name, tasks } = group;
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const { toggleTask } = useContext(TasksContext);

  const toggleMessage = () => (isAccordionOpen ? 'Hide' : 'Show');

  return (
    <AccordionWrapper>
      <AccordionHeader>
        <h3>
          {name}
        </h3>
        <button type="button" aria-label={`${toggleMessage()} ${name}`} onClick={() => setAccordionOpen(!isAccordionOpen)}>{toggleMessage()}</button>
      </AccordionHeader>
      <AccordionContent className={isAccordionOpen ? 'show' : 'hide'} height={tasks.length * LINE_HEIGHT}>
        {tasks.map((task, taskIndex) => (
          <li
            key={task?.description ?? task?.name}
          >
            <Label>
              <input type="checkbox" checked={task.checked} onChange={() => toggleTask(groupIndex, taskIndex)} />{task?.description ?? task?.name}
            </Label>
          </li>
        ))}
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default Accordion;
