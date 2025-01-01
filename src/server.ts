import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Router } from './core/Router';

export class Server {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  handleRequest(req: IncomingMessage, res: ServerResponse): void {
    const { method, url } = req;

    if (!method || !url) {
      res.end('Bad Request');
      return;
    }

    const match = this.router.matchRoute(method, url);
    if (match) {
      const { route, params, query } = match;
      route.callback(req, res, params, query);
    } else {
      res.end('Not Found');
    }
  }

  start(port: number, callback: () => void): void {
    const server = createServer((req, res) => {
      this.handleRequest(req, res); 
    });

    server.listen(port, callback);
  }
}
