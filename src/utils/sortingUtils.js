export function sortTickets(tickets, sortBy) {
    const ticketsCopy = [...tickets];
  
    switch (sortBy) {
      case 'priority':
        return ticketsCopy.sort((a, b) => b.priority - a.priority);
      case 'title':
        return ticketsCopy.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return ticketsCopy;
    }
  }