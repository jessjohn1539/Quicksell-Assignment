import React from 'react';
import './DisplayMenu.css';
import { useKanban } from '../../context/KanbanContext';
import { GROUPING_OPTIONS, SORTING_OPTIONS } from '../../constants/index';

function DisplayMenu({ onClose }) {
  const { state, dispatch } = useKanban();

  const handleGroupingChange = (value) => {
    dispatch({ type: 'SET_GROUP_BY', payload: value });
  };

  const handleSortingChange = (value) => {
    dispatch({ type: 'SET_SORT_BY', payload: value });
  };

  return (
    <div className="display-menu">
      <div className="menu-item">
        <label>Grouping</label>
        <select
          value={state.groupBy}
          onChange={(e) => handleGroupingChange(e.target.value)}
        >
          {GROUPING_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="menu-item">
        <label>Ordering</label>
        <select
          value={state.sortBy}
          onChange={(e) => handleSortingChange(e.target.value)}
        >
          {SORTING_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DisplayMenu;
