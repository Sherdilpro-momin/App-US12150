import { Component, OnChanges } from '@angular/core';
import { OpenAIService } from './openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatMessages: string[] = [];
  inputMessage: string = '';
  loading: boolean = false;

  constructor(private openaiService: OpenAIService) { }

  async sendMessage() {
    if (!this.inputMessage.trim()) {
      return;
    }

    this.loading = true;

    try {
      const response = await this.openaiService.getChatCompletion(this.inputMessage);
      const completion = response.choices[0].message.content;
      this.chatMessages.push(this.inputMessage, completion);
      this.inputMessage = '';
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      this.loading = false;
    }
  }

  // Inside your component class
  isIntentResponse(message: string): boolean {
    // Implement your logic to determine if a response is an intent response
    // For example, you can check if the response contains certain keywords or patterns
    // and return true if it matches the criteria
    return message.includes('intent');
  }
}