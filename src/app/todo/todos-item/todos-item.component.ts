import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl( this.todo.completed );
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtHoverInput.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;
  }

}
