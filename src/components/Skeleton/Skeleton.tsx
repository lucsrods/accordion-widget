import React from 'react';
import {
  AccordionItemSkeleton,
  AccordionListSkeleton,
  HeaderSkeleton,
  LoadingBarSkeleton
} from './styles';


const Skeleton = () => {
  return (
    <div>
      <HeaderSkeleton>
        <h2>Lodgify Grouped Tasks</h2>
        <LoadingBarSkeleton />
      </HeaderSkeleton>
      <AccordionListSkeleton>
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
      </AccordionListSkeleton>
    </div>
  );
};

export default Skeleton;