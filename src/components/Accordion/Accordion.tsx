import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCheckCircle } from '@fortawesome/free-regular-svg-icons';  

import { TasksContext } from '../../contexts/TasksContext';

import { AccordionContent, AccordionHeader, AccordionWrapper, Label, ToggleText } from './styles';

type Props = {
  groupIndex: number;
  group: {
    name: string;
    completed: boolean;
    tasks: Array<{ description?: string; value: number; checked: boolean; name?: string }>;
  } 
}

const LINE_HEIGHT = 48;

function Accordion({
  groupIndex,
  group
}: Props) {
  const { name, tasks, completed } = group;
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const { toggleTask } = useContext(TasksContext);

  const toggleMessage = () => (isAccordionOpen ? 'Hide' : 'Show');

  return (
    <AccordionWrapper>
      <AccordionHeader completed={completed} onClick={() => setAccordionOpen(!isAccordionOpen)}>
        <h3>
          <FontAwesomeIcon icon={completed ? faCheckCircle : faClipboard} /><span>{name}</span>
        </h3>
        <ToggleText isAccordionOpen={isAccordionOpen} aria-label={`${toggleMessage()} ${name}`} >{toggleMessage()}</ToggleText>
      </AccordionHeader>
      <AccordionContent className={isAccordionOpen ? 'show' : 'hide'} height={tasks.length * LINE_HEIGHT}>
        {tasks.map((task, taskIndex) => (
          <li
            key={taskIndex}
          >
            <Label>
              <input type="checkbox" checked={task.checked} onChange={() => toggleTask?.(groupIndex, taskIndex)} />{task?.description ?? task?.name}
            </Label>
          </li>
        ))}
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default Accordion;
