import React from 'react';
import { createContext, useState } from 'react';
import useSWR from 'swr';
import useDeepCompareEffect from 'use-deep-compare-effect';
import fetcher from '../utils/fetcher';

export const TasksContext = createContext({
  groups: [],
  isLoading: true,
  toggleTask: (groupIndex: number, taskIndex: number) => null,
  computedData: {
    gTotal: 0,
    gCompleted: 0,
  }
});

function TaskContextProvider(props: any) {
  const { data } = useSWR(process.env.REACT_APP_API, fetcher);
  const [groups, setGroups] = useState<Array<{ name: string; tasks: Array<{
    name?: string;
    description?: string;
    value: number;
    checked: boolean;
  }> }>>([]);

  const [computedData, setComputedData] = useState({
    gTotal: 0,
    gCompleted: 0,
  });

  const getComputedData = () => data?.reduce((acc: any, curr: any) => {
    const tasksTotal = curr.tasks.reduce((tasksAcc: any, tasksCurr: any) => {
      let completed = tasksAcc.tCompleted;
      const total = tasksCurr.value + tasksAcc.tTotal;

      if (tasksCurr.checked) {
        completed = tasksAcc.tCompleted + tasksCurr.value;
      }

      return {
        tCompleted: completed,
        tTotal: total,
      };
    }, {
      tTotal: 0,
      tCompleted: 0,
    });

    const total = tasksTotal.tTotal + acc.gTotal;
    const completed = tasksTotal.tCompleted + acc.gCompleted;

    return {
      gTotal: total,
      gCompleted: completed,
    };
  }, {
    gTotal: 0,
    gCompleted: 0,
  });


  useDeepCompareEffect(() => {  
    setComputedData(getComputedData());
    setGroups(data);
  }, [data || {}]);

  const toggleTask = (groupIndex: number, taskIndex: number) => {
    if (!groups.length) return;

    const tempComputedData = computedData;
    const tempTask = data[groupIndex].tasks[taskIndex];
    const tempGroups = groups;

    tempTask.checked = !tempTask.checked;
    tempGroups[groupIndex].tasks[taskIndex] = tempTask;

    if (tempTask.checked) {
      tempComputedData.gCompleted += tempTask.value;
    } else {
      tempComputedData.gCompleted -= tempTask.value;
    }

    setGroups([...tempGroups]);
    setComputedData(tempComputedData);
  };

  return (
    <TasksContext.Provider
      value={{ groups, isLoading: !groups, toggleTask, computedData }}
      {...props}
    />
  );
}

export default TaskContextProvider;
