import { ServerResponse } from 'http';
import fs from 'fs'
import path from 'path';

ServerResponse.prototype.isEnded = function (this: ServerResponse) {
  return this.writableEnded;
};

ServerResponse.prototype.text = function(this: ServerResponse, text:string){
  this.writeHead(200, {'Content-Type': 'text/html'});
  this.write(text);
  this.end();
}

ServerResponse.prototype.send = function (
  statusCode: number = 200,
  body: string | Buffer
) {
  let contentType = 'text/plain';

  if (Buffer.isBuffer(body)) {
    contentType = 'application/octet-stream';
  } else if (typeof body === 'string') {
    contentType = body.trim().startsWith('<') ? 'text/html' : 'text/plain';
  } else if (typeof body === 'object') {
    contentType = 'application/json';
    body = JSON.stringify(body);
  }

  this.writeHead(statusCode, { 'Content-Type': contentType });
  this.end(body);
};

ServerResponse.prototype.json = function(
  jsonObj:Record<string, any>,
){
  const jsonStr = JSON.stringify(jsonObj);
  this.writeHead(200, { 'Content-Type': 'application/json' });
  this.end(jsonStr);
}

ServerResponse.prototype.sendFile = function(
  filePath:string
){
  const stack = (new Error()).stack?.split('\n')[2];
  const callerFilePath = stack?.match(/\((.*):/)?.[1];  
  
  if (!callerFilePath) {
    throw new Error('Unable to determine caller file path');
  }

  const callerDir = path.dirname(callerFilePath);
  console.log(callerDir)
  const absolutePath = path.join(callerDir, filePath);
  console.log(absolutePath)
  if(!fs.existsSync(absolutePath)){
    this.send(400, "File does not exists");
    return;
  }
  
  fs.stat(absolutePath, (err, stats) => {
    if (err) {
      this.send(500, 'Internal Server Error');
      return;
    }
    const fileStream = fs.createReadStream(absolutePath);
    const extname = path.extname(absolutePath).toLowerCase();
    
    let contentType = 'application/octet-stream';
    switch (extname) {
      case '.html':
        contentType = 'text/html';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'application/javascript';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
    }
    this.writeHead(200, { 'Content-Type': contentType, 'Content-Length': stats.size });

    fileStream.pipe(this);
    fileStream.on('error', (error) => {
      console.error('Error streaming file:', error);
      this.send(500, 'Internal Server Error');
    });

  }
  )

}
