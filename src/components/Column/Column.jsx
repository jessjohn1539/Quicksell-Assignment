import React from 'react';
import './Column.css';
import Card from '../Card/Card';
import { STATUS_ICONS } from '../../constants/index';
import { SVG_ICONS } from '../../constants/icons';

function Column({ title, tickets }) {
  const statusInfo = STATUS_ICONS[title.toLowerCase()] || {};

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {statusInfo.icon && (
            <img src={statusInfo.icon} alt={statusInfo.name} className="status-icon" />
          )}
          <span>{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <button className="add-button">
            <img src={SVG_ICONS.general.Add} alt="Add" />
          </button>
          <button className="more-button">
            <img src={SVG_ICONS.general.Dot} alt="More" />
          </button>
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Column;