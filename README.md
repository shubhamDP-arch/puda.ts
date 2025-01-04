<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/themes/prism-tomorrow.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/prism.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-javascript.min.js"></script>
</head>
<body>

<h1 align="center"><b>PUDA.TS</b></h1>

<h1>🚨 <b>MY PERSONAL PROJECT, DON’T USE IT FOR YOUR NEXT MILLION-DOLLAR PROJECT</b> 🚨</h1>

<h2>Overview</h2>
<p>
  PUDA is a backend library that provides basic tools to create APIs. It’s a fast, unopinionated, and minimalist library for Node.js.
</p>

<h2>Features</h2>
<ul>
  <li>🚀 <strong>Feature 1</strong> – Consists of a file-based router</li>
  <li>🔌 <strong>Feature 2</strong> – Middleware support</li>
  <li>📦 <strong>Feature 3</strong> – Built-in body parser</li>
  <li>🔒 <strong>Feature 4</strong> – Has built-in type safety</li>
  <li>😄 <strong>Feature 5</strong> – Easy to use and user-friendly</li>
</ul>

<h2>Installation</h2>
<p>To install PUDA.TS, run the following:</p>

<pre>
<code>npm install puda.ts</code>
</pre>

<p>Example usage:</p>
<pre>
<code code="class="language-js"">
import { Server, initializeRouter } from "puda.ts";

const router = initializeRouter("./&lt;name of your folder for routes&gt;");

const server = new Server(router);

server.start(PORTNUMBER, () => console.log("Server running at http://localhost:PORTNUMBER"));
</code>
</pre>

<p>
  PUDA.TS uses a file-based API router where each file in your directory is automatically mapped to a route. There’s no need to manually define routes in a configuration file.
</p>

<h3>Prerequisites</h3>
<ul>
  <li>Make sure you have <strong>TypeScript</strong> and <strong>Node.js</strong> installed.</li>
  <li>Also ensure <strong>ts-node</strong> is installed globally.</li>
</ul>

<h3>Setup</h3>
<p>Add the following script to your <code>package.json</code>:</p>

<pre>
<code>
"scripts": {
  "start": "npm link puda.ts && npx ts-node-dev --watch --respawn --clear route.ts"
}
</code>
</pre>

<p>
  Once added, simply run the script to start the server, and you're good to go!
</p>

<h2>Basic HTTP Response in PUDA.TS</h2>

<pre>
<code>
import { Request, Response } from 'puda.ts'; 

export default function GET(req: Request, res: Response): void {
    res.send(200, "hello mom");
}
</code>
</pre>

</body>
</html>

