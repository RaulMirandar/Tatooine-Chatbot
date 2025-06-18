import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Tatooine-Chatbot';

  // Estado del chatbot: visible o no
  isChatbotHidden = true;

  toggleChatbot() {
    this.isChatbotHidden = !this.isChatbotHidden;
  }

  closeChatbot() {
    this.isChatbotHidden = true;
  }
}
