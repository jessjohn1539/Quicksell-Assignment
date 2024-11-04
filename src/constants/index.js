import { SVG_ICONS } from './icons';

export const PRIORITY_LEVELS = {
  4: { name: 'Urgent', icon: SVG_ICONS.priority[4] },
  3: { name: 'High', icon: SVG_ICONS.priority[3] },
  2: { name: 'Medium', icon: SVG_ICONS.priority[2] },
  1: { name: 'Low', icon: SVG_ICONS.priority[1] },
  0: { name: 'noPriority', icon: SVG_ICONS.priority[0] },
};

export const STATUS_ICONS = {
  backlog: { name: 'Backlog', icon: SVG_ICONS.status['Backlog'] },
  todo: { name: 'Todo', icon: SVG_ICONS.status['Todo'] },
  'in progress': { name: 'In progress', icon: SVG_ICONS.status['In progress'] },
  done: { name: 'Done', icon: SVG_ICONS.status['Done'] },
  canceled: { name: 'Canceled', icon: SVG_ICONS.status['Canceled'] },
};

export const GROUPING_OPTIONS = [
  { value: 'status', label: 'Status' },
  { value: 'user', label: 'User' },
  { value: 'priority', label: 'Priority' },
];

export const SORTING_OPTIONS = [
  { value: 'priority', label: 'Priority' },
  { value: 'title', label: 'Title' },
];

// Re-export SVG_ICONS for direct access if needed
export { SVG_ICONS };