import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private webSocket$: WebSocketSubject<any>;

  constructor() {
    this.webSocket$ = webSocket('ws://localhost:8080');
  }

  getWebSocket(): WebSocketSubject<any> {
    return this.webSocket$;
  }

  setViewerCount(viewerCount: number) {
    this.webSocket$.next({ type: 'SET_VIEWER_COUNT', data: viewerCount });
  }
}
