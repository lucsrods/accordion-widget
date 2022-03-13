import React from 'react';
import { createContext, useState } from 'react';
import useSWR from 'swr';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { Group } from '@customTypes/Group';
import fetcher from '@customUtils/fetcher';

type TasksContextType = {
  groups: Array<Group>
  isLoading: boolean;
  toggleTask?: (groupIndex: number, taskIndex: number) => void;
  computedData: {
    gTotal: number,
    gCompleted: number
  }
}

type Task = {
  name?: string;
  description?: string;
  value: number;
  checked: boolean;
}

type TaskComputedData = {
  tTotal: number;
  tCompleted: number;
}

type GroupComputedData = {
  gTotal: number;
  gCompleted: number;
}

const initialState = {
  groups: [],
  isLoading: true,
  computedData: {
    gTotal: 0,
    gCompleted: 0
  }
};

export const TasksContext = createContext<TasksContextType>(initialState);

function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useSWR(process.env.REACT_APP_API, fetcher);
  const [groups, setGroups] = useState<Array<Group>>([]);

  const [computedData, setComputedData] = useState({
    gTotal: 0,
    gCompleted: 0,
  });

  const getComputedData = () => data?.reduce((acc: GroupComputedData, curr: Group) => {
    const tasksTotal = curr.tasks.reduce((tasksAcc: TaskComputedData, tasksCurr: Task) => {
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
    if (!data) return;

    const tempGroups = data.map((group: Group) => {
      const hasUnfinishedTasks = group.tasks.some((task: Task) => !task.checked);

      return {
        ...group,
        completed: !hasUnfinishedTasks
      };
    });

    setComputedData(getComputedData());
    setGroups(tempGroups);
  }, [data || {}]);

  const toggleTask = (groupIndex: number, taskIndex: number) => {
    if (!groups.length) return;

    const tempComputedData = computedData;
    const tempTask = data[groupIndex].tasks[taskIndex];
    const tempGroups = groups;

    tempTask.checked = !tempTask.checked;
    tempGroups[groupIndex].tasks[taskIndex] = tempTask;

    const hasUnfinishedTasks = tempGroups[groupIndex].tasks.some(({ checked }: { checked: boolean }) => !checked);
    tempGroups[groupIndex].completed = !hasUnfinishedTasks;

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
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TaskContextProvider;
