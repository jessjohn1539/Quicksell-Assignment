export function groupTickets(tickets, users, groupBy) {
    switch (groupBy) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets, users);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return groupByStatus(tickets);
    }
  }
  
  function groupByStatus(tickets) {
    return tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) {
        groups[status] = [];
      }
      groups[status].push(ticket);
      return groups;
    }, {});
  }
  
  function groupByUser(tickets, users) {
    const userMap = users.reduce((map, user) => {
      map[user.id] = user.name;
      return map;
    }, {});
  
    return tickets.reduce((groups, ticket) => {
      const userName = userMap[ticket.userId] || 'Unassigned';
      if (!groups[userName]) {
        groups[userName] = [];
      }
      groups[userName].push(ticket);
      return groups;
    }, {});
  }
  
  function groupByPriority(tickets) {
    const priorityGroups = {
      'Urgent': [],
      'High': [],
      'Medium': [],
      'Low': [],
      'noPriority': [],
    };
  
    tickets.forEach(ticket => {
      switch (ticket.priority) {
        case 4:
          priorityGroups['Urgent'].push(ticket);
          break;
        case 3:
          priorityGroups['High'].push(ticket);
          break;
        case 2:
          priorityGroups['Medium'].push(ticket);
          break;
        case 1:
          priorityGroups['Low'].push(ticket);
          break;
        default:
          priorityGroups['noPriority'].push(ticket);
      }
    });
  
    return priorityGroups;
  }