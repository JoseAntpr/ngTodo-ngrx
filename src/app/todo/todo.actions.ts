import { Action } from '@ngrx/store';


export const ADD_TODO = '[TODO] add todo';
export const TOOGLE_TODO = '[TODO] Toggle todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public text: string) {}
}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor( public id: number) {}
}

export type actions =   AddTodoAction       |
                        ToogleTodoAction;
