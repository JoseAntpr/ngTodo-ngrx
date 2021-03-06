import { Component, OnInit } from '@angular/core';
import { Store } from 'node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[];
  filter: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
