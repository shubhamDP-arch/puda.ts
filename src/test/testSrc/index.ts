import { Request, Response } from 'src/NodeLink'; 

function logRequest(req: Request, res: Response, next: () => void): void {
  console.log(`Incoming request:`);
  next(); 
}

export default function POST(req: Request, res: Response): void {
  res.send(200, 'Hello from POST route');
}

POST.middleware = [logRequest]; 