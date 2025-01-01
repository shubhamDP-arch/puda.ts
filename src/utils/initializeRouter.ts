import path from 'path';
import { RouteLoader } from "../core/RouteLoader";
import { Router } from "../core/Router";

export default function initializeRouter(relativePath: string): Router {

  const stack = (new Error()).stack?.split('\n')[2];
  const callerFilePath = stack?.match(/\((.*):/)?.[1];  
  
  if (!callerFilePath) {
    throw new Error('Unable to determine caller file path');
  }

  const callerDir = path.dirname(callerFilePath);
  const absolutePath = path.resolve(callerDir, relativePath);
  console.log(absolutePath)
  const router = new Router();
  
  const routes = RouteLoader.load(absolutePath);
  console.log(routes)
  routes.forEach(route => router.addRoute(route)); 
  return router;
}
