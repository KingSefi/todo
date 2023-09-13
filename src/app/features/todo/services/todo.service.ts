import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public fetchTodos(): Observable<{ todos: Todo[] }> {
    return this.http.get<{ todos: Todo[] }>('https://dummyjson.com/todos');
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`https://dummyjson.com/todos/add`, todo);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const { id, ...newTodo } = todo;
    return this.http.patch<Todo>(
      `https://dummyjson.com/todos/${todo.id}`,
      newTodo
    );
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`https://dummyjson.com/todos/${todo.id}`);
  }
}
