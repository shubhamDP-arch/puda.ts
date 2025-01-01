import { IncomingMessage, ServerResponse } from "http";


export type MiddlewareFunction = (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => void;

