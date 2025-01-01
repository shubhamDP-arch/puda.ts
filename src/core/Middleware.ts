//unnecessary
import { IncomingMessage, ServerResponse } from 'http';
import { RouteHandler } from './RouteLoader'; 
import { MiddlewareFunction } from '../types/types';
export function useMiddleware(...middlewares: MiddlewareFunction[]) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalHandler: RouteHandler = descriptor.value;  

    if (!originalHandler.middleware) {
      originalHandler.middleware = [];
    }

    originalHandler.middleware.push(...middlewares);

    descriptor.value = (req: IncomingMessage, res: ServerResponse, params: any, query: any) => {
      let index = 0;

      const next = () => {
        if (index < (originalHandler.middleware ?? []).length) {
          let middleware;
          if(originalHandler.middleware){
            middleware = originalHandler.middleware[index++];
          }
          if(middleware)
          middleware(req, res, next);
        } else {
          originalHandler(req, res, params, query);
        }
      };

      next();
    };

    return descriptor;
  };
}
