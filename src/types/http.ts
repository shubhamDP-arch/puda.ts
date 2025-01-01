import { ServerResponse, IncomingMessage } from 'http';

// Extend the ServerResponse interface
declare module 'http' {
  interface ServerResponse {
    send(statusCode: number, body: string | Buffer | Record<string, any>):any;
    sendFile(filePath:string):any;
    isEnded(): boolean;
    text(text: string): void;
    json(jsonObj: Record<string, any>): void;
  }
  interface  IncomingMessage{
    get(header: string):string |string[]| null;
  }
}
