import { ServerResponse } from "http"

export interface Response extends ServerResponse{
  send(statusCode: number, body: string | Buffer | Record<string, any>):any;
  sendFile(filePath:string):any;
  isEnded(): boolean;
  text(text: string): void;
  json(jsonObj: Record<string, any>): void;
}