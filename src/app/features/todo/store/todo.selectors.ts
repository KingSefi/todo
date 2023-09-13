import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey, TodoState } from './todo.reducer';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

export const selectTodoFeature =
  createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodoData = createSelector(
  selectTodoFeature,
  (state: TodoState): Todo[] => {
    return state.data.todos;
  }
);

// export const selectTodoStates = createSelector(
//   selectTodoFeature,

//   ({ data, error }: TodoState) => {
//     return { data, error };
//   }
// );
