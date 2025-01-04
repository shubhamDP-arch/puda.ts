PUDA.TS

###########MY PERSONAL PROJECT DONT USE IT FOR YOUR NEXT MILLION DOLLAR PROJECT ####################################
Overview

Framework Name is an backend library which provides basic tools to create apis. Its Fast, unopinionated, minimalist library for Node.js.

Features:

    Feature 1 – Consists of a file based router
    Feature 2 – Middleware Support
    Feature 3 – Built in Body parser
    Feature 4 - has built in type safety
    Feature 5 - easy to use and userfriendly

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






   
