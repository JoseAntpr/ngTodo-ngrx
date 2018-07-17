import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(  todos: Todo[], filter: validFilters): Todo[] {

    console.log(todos);
    console.log(filter);
    switch (filter ) {
      case 'completados':
        return todos.filter( todo => todo.completed);
      case 'pendientes':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }

    return todos;
  }

}
