import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToogleTodoAction, UpdateTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtHoverInput') txtHoverInput: ElementRef;
  checkField: FormControl;
  txtInput: FormControl;

  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl( this.todo.completed );
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe( () => {
      const action = new ToogleTodoAction( this.todo.id );

      this.store.dispatch( action );
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtHoverInput.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;
    if (this.txtInput.invalid ) {
      return;
    }

    if ( this.txtInput.value === this.todo.text ) {
      return;
    }

    const action = new UpdateTodoAction( this.todo.id, this.txtInput.value);
    this.store.dispatch( action );
  }

  deleteTodo() {
    const action =  new DeleteTodoAction( this.todo.id );

    this.store.dispatch(action);
  }

}
