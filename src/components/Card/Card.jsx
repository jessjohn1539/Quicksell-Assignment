import React from 'react';
import './Card.css';
import { PRIORITY_LEVELS } from '../../constants/index';
import { useKanban } from '../../context/KanbanContext';

function Card({ ticket }) {
  const { state } = useKanban();
  const { users } = state;
  
  const user = users.find(u => u.id === ticket.userId);
  const priorityInfo = PRIORITY_LEVELS[ticket.priority];

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name.charAt(0) || '?'}
        </div>
      </div>
      <div className="card-title">
        <img src={priorityInfo.icon} alt={priorityInfo.name} className="priority-icon"/>
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            ○ {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;