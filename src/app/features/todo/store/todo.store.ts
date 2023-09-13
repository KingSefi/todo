import { Action, ActionReducerMap } from '@ngrx/store';
import { todoFeatureKey, TodoState, todosReducer } from './todo.reducer';

export interface AppState {
  todos: TodoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  [todoFeatureKey]: todosReducer,
};
