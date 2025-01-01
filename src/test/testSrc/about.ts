import { Request, Response } from "src/NodeLink";
function logRequest(req: Request, res: Response, next: () => void): void {
    console.log(`Incoming about`);
    next(); 
}
  
export default function POST (req: Request, res: Response): void{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About this app: It’s a demo for file-routing-framework.');
};

POST.middleware = [logRequest];