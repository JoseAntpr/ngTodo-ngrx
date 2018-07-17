import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import * as fromFilterAction from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: fromFilterAction.validFilters;
    // User
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};
