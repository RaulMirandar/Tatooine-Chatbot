import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInput } from './components/text-input/text-input';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Tatooine-Chatbot';
}
