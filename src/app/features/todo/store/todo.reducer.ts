import { createReducer, on } from '@ngrx/store';

import {
  fetchErrorAction,
  fetchSuccessAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from './todo.actions';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

export const todoFeatureKey = 'todos';

export interface TodoState {
  data: { todos: Todo[] };
  skip?: number;
  limit?: number;
  total?: number;
  error: any;
}

const initialState: TodoState = {
  data: { todos: [] },
  error: null,
};

export const todosReducer = createReducer(
  initialState,
  on(fetchSuccessAction, (state: TodoState, { data }) => {
    return {
      ...state,
      data: { todos: data.todos },
    };
  }),
  on(addTodoAction, (state: TodoState, { todo }): TodoState => {
    return {
      ...state,
      data: {
        todos: [...state.data.todos, todo],
      },
    };
  }),
  on(deleteTodoAction, (state: TodoState, { todo }): TodoState => {
    return {
      ...state,
      data: { todos: state.data.todos.filter((curr) => curr.id !== todo.id) },
    };
  }),
  on(updateTodoAction, (state: TodoState, { todo }): TodoState => {
    return {
      ...state,
      data: {
        todos: state.data.todos.map((curr) =>
          curr.id !== todo.id ? curr : todo
        ),
      },
    };
  }),
  on(fetchErrorAction, (state: TodoState, { error }): TodoState => {
    return {
      ...state,
      error: error,
    };
  })
);
