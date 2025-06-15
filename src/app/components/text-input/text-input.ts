import { Component,OnInit } from '@angular/core';
import bootstrap from '../../../main.server';
import { Form, FormGroup,ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css'
})

export class TextInput implements OnInit{

  myForm!: FormGroup;
  protected query: string = '';

  constructor() {}

  ngOnInit():void {
    // Initialize the form group if needed
    this.myForm = new FormGroup({
      query: new FormControl(''), // Add validators if needed
    });
  }

  onSubmit() {
    const queryValue = this.myForm.get('query')?.value;
    console.log('Se presionó el botón');
    if (queryValue && queryValue.trim()) {
      console.log('Submitted query:', queryValue);
      this.myForm.reset(); // Clear the input after submission
    } else {
      console.warn('Query is empty');
    }
  }


}
