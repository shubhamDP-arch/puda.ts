<h1 align="center"><b>PUDA.TS</b></h1>



<h1>🚨 <b>MY PERSONAL PROJECT, DON’T USE IT FOR YOUR NEXT MILLION-DOLLAR PROJECT</b> 🚨</h1>


**Overview**

PUDA is an backend library which provides basic tools to create apis. Its Fast, unopinionated, minimalist library for Node.js.

<h2>Features</h2>
<ul>
  <li>🚀 <strong>Feature 1</strong> – Consists of a file-based router</li>
  <li>🔌 <strong>Feature 2</strong> – Middleware support</li>
  <li>📦 <strong>Feature 3</strong> – Built-in body parser</li>
  <li>🔒 <strong>Feature 4</strong> – Has built-in type safety</li>
  <li>😄 <strong>Feature 5</strong> – Easy to use and user-friendly</li>
</ul>



To install PUDA.TS, run the following:


```bash
npm install pudda.ts
```


```ts
import { Server, initializeRouter } from "puda.ts";

const router = initializeRouter("./<name of your folder for routes>");

const server = new Server(router);

server.start(PORTNUMBER, () => console.log("Server running at http://localhost:PORTNUMBER"));
```


It uses a file based api router where each file in your page is a route  no need to manually define routes in a configuration file.

make sure you have typescript and node.js installed also install ts-node is installed


```json
  "start": "npm link puda.ts && npx ts-node-dev --watch --respawn --clear route.ts" 
```

add this to your scripts file and then you are good to go 

basic http response in puda.ts


```ts
  
import { Request, Response} from 'puda.ts'; 

export default function GET(req: Request, res: Response): void {

    res.send(200, "hello mom")

}
```
