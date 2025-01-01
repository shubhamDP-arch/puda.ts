import { IncomingMessage, ServerResponse } from 'http';
import { readFiles } from '../utils/fileHandler';
import { MiddlewareFunction } from '../../src/types/types';
import Route from '../interfaces/route.interface';
import GLOBAL from '../utils/globalMiddleWare'
export interface RouteHandler extends Function {
  middleware?: MiddlewareFunction[];
}

export class RouteLoader {
  static load(directory: string): Route[] {
    console.clear();
    const routes: Route[] = [];
    const files = readFiles(directory); 
    const global = require("../utils/globalMiddleWare").default

    const globalMiddlewares = this.extractMiddleware(global)
    files.forEach(file => {
        file
      const routeModule = require(file).default; 


      if (typeof routeModule === 'function') {
        const method = this.getMethodFromFunctionName(routeModule);
       
        const relativePath = file
          .replace(directory, '')
          .replace(/\\/g, '/') 
          .replace('.ts', '')
          .replace('/index', '/');

        const path = relativePath;

        const routeMiddlewares = this.extractMiddleware(routeModule);
        
        const combinedMiddlewares = [...globalMiddlewares, ...routeMiddlewares];
        const handler = this.wrapWithMiddleware(routeModule, combinedMiddlewares);
        
        
        routes.push({
          path,
          method,
          callback: handler,
        });
      }
    });
    routes.push

    return routes;
  }

  
  private static getMethodFromFunctionName(routeModule: Function): string {
    const method = routeModule.name.toUpperCase(); 
    return method || 'GET'; 
  }

  private static extractMiddleware(routeModule: RouteHandler): MiddlewareFunction[] {
    return routeModule.middleware || [];
  }

  private static wrapWithMiddleware(handler: RouteHandler, middlewares: MiddlewareFunction[]): RouteHandler {
    return (req: IncomingMessage, res: ServerResponse, params: any, query: any) => {
      let index = 0;

      const next = () => {
        if (index < middlewares.length) {
          const middleware = middlewares[index++];
          middleware(req, res, next); 
        } else {
          handler(req, res, params, query); 
        }
      };

      next(); 
    };
  }
}
