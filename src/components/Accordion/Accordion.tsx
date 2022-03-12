import React, { useState } from 'react';
import { AccordionContent, AccordionHeader, AccordionWrapper } from './styles';

type Props = {
  groupName: string;
  tasks: Array<{ description?: string; value: number; checked: boolean; name?: string }>;
}

function Accordion({ groupName, tasks }: Props) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const toggleMessage = () => (isAccordionOpen ? 'Hide' : 'Show');

  return (
    <AccordionWrapper>
      <AccordionHeader>
        <h3>
          {groupName}
        </h3>
        <button type="button" aria-label={`${toggleMessage()} ${groupName}`} onClick={() => setAccordionOpen(!isAccordionOpen)}>{toggleMessage()}</button>
      </AccordionHeader>
      <AccordionContent className={isAccordionOpen ? 'show' : 'hide'}>
        {tasks.map((task) => (
          <li
            key={task?.description ?? task?.name}
          >
            <input type="checkbox" checked={task.checked} />
            <p>{task?.description ?? task?.name}</p>
          </li>
        ))}
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default Accordion;
