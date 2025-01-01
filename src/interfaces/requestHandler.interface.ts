import { IncomingMessage, ServerResponse } from 'http';

export interface RequestHandler {
    handleRequest(req: IncomingMessage, res: ServerResponse): void;
}
