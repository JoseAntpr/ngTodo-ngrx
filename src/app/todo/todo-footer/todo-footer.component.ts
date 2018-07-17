import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFilterActions from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilterActions.validFilters[] = ['todos', 'completados', 'pendientes'];
  actualFilter: fromFilterActions.validFilters;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.calculatePending( state.todos );
    });
  }

  changeFilter(newFilter: fromFilterActions.validFilters) {
    const action = new fromFilterActions.SetFilterAction(newFilter);

    this.store.dispatch( action );
  }

  calculatePending(todos: Todo[]) {
    this.pendientes = todos.filter( todo => !todo.completed ).length;
  }

}
