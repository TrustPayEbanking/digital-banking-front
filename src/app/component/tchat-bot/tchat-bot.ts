import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-tchat-bot',
  standalone: false,
  templateUrl: './tchat-bot.html',
  styleUrl: './tchat-bot.css',
})
export class TchatBot  {
  isOpen = false;
  hasNewMessage = true;
  userInput = '';

  suggestions: string[] = [
    '💳 Consulter mon solde',
    '📄 Voir mes transactions',
    '📞 Contacter le support'
  ];

  messages: Message[] = [
    { from: 'bot', text: '👋 Bonjour ! Comment puis-je vous aider ?' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.hasNewMessage = false;
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ from: 'user', text });
    this.userInput = '';

    setTimeout(() => {
      this.messages.push({
        from: 'bot',
        text: 'Merci pour votre message, un assistant va vous répondre.'
      });

      // Si le chat est fermé, afficher le badge rouge
      if (!this.isOpen) this.hasNewMessage = true;
    });
  }

  // Cliquer sur une suggestion
  selectSuggestion(suggestion: string) {
    this.userInput = suggestion;
    this.sendMessage();
    this.suggestions = [];
  }
}
