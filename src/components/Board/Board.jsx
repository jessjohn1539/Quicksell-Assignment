import React from 'react';
import './Board.css';
import Column from '../Column/Column';
import { useKanban } from '../../context/KanbanContext';
import { groupTickets } from '../../utils/groupingUtils';
import { sortTickets } from '../../utils/sortingUtils';

function Board() {
  const { state } = useKanban();
  const { tickets, users, groupBy, sortBy, loading, error } = state;

  if (loading) return <div className="board-loading">Loading...</div>;
  if (error) return <div className="board-error">{error}</div>;

  const groupedTickets = groupTickets(tickets, users, groupBy);

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([groupName, tickets]) => (
        <Column 
          key={groupName}
          title={groupName}
          tickets={sortTickets(tickets, sortBy)}
        />
      ))}
    </div>
  );
}

export default Board;