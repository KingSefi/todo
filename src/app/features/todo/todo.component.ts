import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';
import { AppState } from './store/todo.store';
import {
  fetchTodosAction,
  tryAddTodoAction,
  tryUpdateTodoAction,
  tryDeleteTodoAction,
} from './store/todo.actions';
import { selectTodoData } from './store/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  public todos$: Observable<Todo[]>;
  public message: string = '';

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(selectTodoData);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchTodosAction());
  }

  public addTodo(): void {
    this.store.dispatch(
      tryAddTodoAction({
        todo: { userId: '1', todo: this.message, completed: false },
      })
    );
    this.message = '';
  }

  public updateTodo(todo: Todo): void {
    const newTodo = { ...todo, completed: !todo.completed };
    this.store.dispatch(tryUpdateTodoAction({ todo: newTodo }));
  }

  public deleteTodo(todo: Todo): void {
    this.store.dispatch(tryDeleteTodoAction({ todo }));
  }
}
