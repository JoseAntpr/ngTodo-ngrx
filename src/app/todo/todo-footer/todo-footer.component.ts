import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFilterActions from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilterActions.validFilters[] = ['todos', 'completados', 'pendientes'];
  actualFilter: fromFilterActions.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
    });
  }

  changeFilter(newFilter: fromFilterActions.validFilters) {
    const action = new fromFilterActions.SetFilterAction(newFilter);

    this.store.dispatch( action );
  }

}
