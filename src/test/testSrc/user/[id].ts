import { Request, Response } from "src/NodeLink";

export default function GET(req: Request, res:Response, params?: Record<string, string>, query?:Record<string, string>){

    const param = params?.id || 'unknown';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`User profile for user ID: ${query?.city}`);
};
