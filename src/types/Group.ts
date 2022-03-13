export type Group = {
  name: string;
  completed: boolean;
  tasks: Array<{
    name?: string;
    description?: string;
    value: number;
    checked: boolean;
  }>
}