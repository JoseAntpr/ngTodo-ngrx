import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Hacer los deberes');
const todo3 = new Todo('Ir al futbol');
todo2.completed = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer ( state = initialState, action: fromTodo.actions ): Todo[] {
    switch ( action.type ) {
        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text );
            return [...state, todo];
        case fromTodo.TOOGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completed: action.completed
                    };
            });
        case fromTodo.TOOGLE_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        completed: !todoEdit.completed
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.UPDATE_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.DELETE_TODO:
            return state.filter( todoDelete => todoDelete.id !== action.id );
        case fromTodo.DELETE_ALL_TODO:
            return state.filter( todoDelete => !todoDelete.completed);
        default:
            return state;
    }
}
