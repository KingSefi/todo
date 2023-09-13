import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

export const fetchTodosAction = createAction('[todo] fetch todo');

export const fetchSuccessAction = createAction(
  '[todo] fetch success',
  props<{ data: { todos: Todo[] } }>()
);

export const fetchErrorAction = createAction(
  '[todo] fetch error',
  props<{ error: any }>()
);

export const tryAddTodoAction = createAction(
  '[todo] try add todo',
  props<{ todo: Todo }>()
);

export const addTodoAction = createAction(
  '[todo] add todo',
  props<{ todo: Todo }>()
);

export const tryDeleteTodoAction = createAction(
  '[todo] try delete todo',
  props<{ todo: Todo }>()
);

export const deleteTodoAction = createAction(
  '[todo] delete todo',
  props<{ todo: Todo }>()
);

export const tryUpdateTodoAction = createAction(
  '[todo] try update todo',
  props<{ todo: Todo }>()
);

export const updateTodoAction = createAction(
  '[todo] update todo ',
  props<{ todo: Todo }>()
);
