import React, { useState } from 'react';
import { AccordionHeader, AccordionWrapper } from './styles';

type Props = {
  groupName: string
}

function Accordion({ groupName }: Props) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  return (
    <AccordionWrapper>
      <AccordionHeader>
        <h3>
          {groupName}
        </h3>
        <button type="button" aria-label="toggle accordion 0" onClick={() => setAccordionOpen(!isAccordionOpen)}>{isAccordionOpen ? 'Hide' : 'Show'}</button>
      </AccordionHeader>
    </AccordionWrapper>
  );
}

export default Accordion;
