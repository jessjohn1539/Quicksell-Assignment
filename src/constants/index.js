import { SVG_ICONS } from './icons';

export const PRIORITY_LEVELS = {
  4: { name: 'Urgent', icon: SVG_ICONS.priority[4] },
  3: { name: 'High', icon: SVG_ICONS.priority[3] },
  2: { name: 'Medium', icon: SVG_ICONS.priority[2] },
  1: { name: 'Low', icon: SVG_ICONS.priority[1] },
  0: { name: 'noPriority', icon: SVG_ICONS.priority[0] },
};

// export const STATUS_ICONS = {
//   'Backlog': SVG_ICONS.status['Backlog'],
//   'Todo': SVG_ICONS.status['Todo'],
//   'In progress': SVG_ICONS.status['In progress'],
//   'Done': SVG_ICONS.status['Done'],
//   'Canceled': SVG_ICONS.status['Canceled'],
// };

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
  { value: 'priority', label: 'Priority'},
  { value: 'title', label: 'Title' },
];

// Re-export SVG_ICONS for direct access if needed
export { SVG_ICONS };


// export const PRIORITY_LEVELS = {
//     4: { name: 'Urgent', icon: '⚡' },
//     3: { name: 'High', icon: '🔴' },
//     2: { name: 'Medium', icon: '🟡' },
//     1: { name: 'Low', icon: '🔵' },
//     0: { name: 'No priority', icon: '⚪' },
//   };
  
//   export const STATUS_ICONS = {
//     'Backlog': '📥',
//     'Todo': '📋',
//     'In progress': '🏗️',
//     'Done': '✅',
//     'Canceled': '❌',
//   };
  
//   export const GROUPING_OPTIONS = [
//     { value: 'status', label: 'Status' },
//     { value: 'user', label: 'User' },
//     { value: 'priority', label: 'Priority' },
//   ];
  
//   export const SORTING_OPTIONS = [
//     { value: 'priority', label: 'Priority' },
//     { value: 'title', label: 'Title' },
//   ];