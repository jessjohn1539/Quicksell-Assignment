import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { fetchTicketsAndUsers } from '../services/api';
import { useLocalStorage } from '../hooks/useLocalStorage';

const KanbanContext = createContext();

const initialState = {
  tickets: [],
  users: [],
  loading: true,
  error: null,
  groupBy: 'status',
  sortBy: 'priority',
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        tickets: action.payload.tickets,
        users: action.payload.users,
        loading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'SET_GROUP_BY':
      return {
        ...state,
        groupBy: action.payload,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}

export function KanbanProvider({ children }) {
  const [savedState, setSavedState] = useLocalStorage('kanbanState', {
    groupBy: 'status',
    sortBy: 'priority',
  });

  const [state, dispatch] = useReducer(kanbanReducer, {
    ...initialState,
    groupBy: savedState.groupBy,
    sortBy: savedState.sortBy,
  });

  useEffect(() => {
    fetchTicketsAndUsers()
      .then(data => dispatch({ type: 'SET_DATA', payload: data }))
      .catch(error => dispatch({ type: 'SET_ERROR', payload: error.message }));
  }, []);

  useEffect(() => {
    setSavedState({
      groupBy: state.groupBy,
      sortBy: state.sortBy,
    });
  }, [state.groupBy, state.sortBy, setSavedState]);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
}

export function useKanban() {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error('useKanban must be used within a KanbanProvider');
  }
  return context;
}