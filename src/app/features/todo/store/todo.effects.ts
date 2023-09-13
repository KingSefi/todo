import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  fetchErrorAction,
  fetchSuccessAction,
  fetchTodosAction,
  tryAddTodoAction,
  addTodoAction,
  tryDeleteTodoAction,
  deleteTodoAction,
  tryUpdateTodoAction,
  updateTodoAction,
} from './todo.actions';
import { TodoService } from '../services/todo.service';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Injectable()
export class TodoEffects {
  fetchTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodosAction),
      switchMap(() =>
        this.todoService.fetchTodos().pipe(
          map((data) => fetchSuccessAction({ data })),
          catchError((error) => of(fetchErrorAction({ error })))
        )
      )
    )
  );

  addTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryAddTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.addTodo(todo).pipe(
          map((todo: Todo) => addTodoAction({ todo })),
          catchError((error) => of(fetchErrorAction({ error })))
        )
      )
    )
  );

  deleteTodoAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryDeleteTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.deleteTodo(todo).pipe(
          map((todo: Todo) => deleteTodoAction({ todo })),
          catchError((error) => of(fetchErrorAction({ error })))
        )
      )
    )
  );

  updateTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryUpdateTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.updateTodo(todo).pipe(
          map((todo: Todo) => updateTodoAction({ todo })),
          catchError((error) => of(fetchErrorAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
