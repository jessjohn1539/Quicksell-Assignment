import React from 'react';
import './Card.css';
import { PRIORITY_LEVELS, STATUS_ICONS } from '../../constants/index';
import { useKanban } from '../../context/KanbanContext';

function Card({ ticket, groupBy }) {
  const { state } = useKanban();
  const { users } = state;

  const user = users.find(u => u.id === ticket.userId);
  const priorityInfo = PRIORITY_LEVELS[ticket.priority];

  let statusInfo;
  if (groupBy === 'status') {
    statusInfo = STATUS_ICONS[ticket.status.toLowerCase()] || {};
  } else if (groupBy === 'priority') {
    statusInfo = STATUS_ICONS[ticket.status.toLowerCase()] || {};
  } else if (groupBy === 'user') {
    statusInfo = STATUS_ICONS[ticket.status.toLowerCase()] || {};
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== 'user' && (
          <div className="user-avatar">
          {user?.name.charAt(0) || '?'}
        </div>
        )}

      </div>
      <div className="card-title">
        {groupBy !== 'status' && groupBy !== 'user' && (
          <div className="status-icon">
            {statusInfo?.icon && (
              <img src={statusInfo.icon} alt={statusInfo.name} className="status-icon" />
            )}
          </div>
        )}
        {groupBy === 'user' && (
          <div className="status-icon">
            {statusInfo?.icon && (
              <img src={statusInfo.icon} alt={statusInfo.name} className="status-icon" />
            )}
          </div>
        )}
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
      {groupBy !== 'priority' && (
          <img src={priorityInfo.icon} alt={priorityInfo.name} className="priority-icon" />
        )}
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