// extendedIncomingRequest.ts
import { IncomingMessage } from 'http';
import '../types/http'
IncomingMessage.prototype.get = function(this: IncomingMessage, header: string) {
  const incomingHeader = this.headers[header.toLowerCase()] || null;
  return incomingHeader;
};
