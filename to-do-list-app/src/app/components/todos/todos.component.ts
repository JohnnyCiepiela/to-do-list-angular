import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  private _inputTodo: string = '';

  @Input()
  set inputTodo(value: string) {
    this._inputTodo = value;
    this.checkInput();
  }

  get inputTodo(): string {
    return this._inputTodo;
  }

  isDisabled = true;

  constructor() {
  }

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
    this.isDisabled = true;
  }

  checkInput() {
    if (this._inputTodo.trim() === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
}
