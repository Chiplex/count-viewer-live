import { Component } from '@angular/core';
import { WebSocketService } from './web-socket-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  constructor(private webSocketService: WebSocketService) {
    const webSocket = this.webSocketService.getWebSocket();

    webSocket.subscribe((message) => {
      if (message.type === 'VIEWER_COUNT') {
        this.count = message.data;
      }
    });
  }

  increment() {
    this.count++;
    this.webSocketService.setViewerCount(this.count);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.webSocketService.setViewerCount(this.count);
    }
  }
}
