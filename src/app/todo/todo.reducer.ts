import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Hacer los deberes');

const initialState: Todo[] = [todo1, todo2];

export function todoReducer ( state = initialState, action: fromTodo.actions ): Todo[] {
    switch ( action.type ) {
        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text );
            return [...state, todo];
        default:
            return state;
    }
}
