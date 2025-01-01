import Route from "../interfaces/route.interface";

export class Router {
    private routes: Route[] = [];

    addRoute(route: Route): void {
        this.routes.push(route);
    }

    matchRoute(
        method: string, 
        urlPath: string
    ): { 
        route: Route; 
        params?: Record<string, string>; 
        query?: Record<string, string>; 
    } | null {
        
        const [path, queryString] = urlPath.split('?'); 
    
        for (const route of this.routes) {
            const pathRegex = new RegExp(
                `^${route.path.replace(/\[([^\]]+)\]/g, (_: any, param: any) => `(?<${param}>[^/]+)`)}$`
            );
    
            const match = path.match(pathRegex);
    
            if (match && route.method === method) {
               
                const query: Record<string, string> = {};
                if (queryString) {
                    queryString.split('&').forEach((pair) => {
                        const [key, value] = pair.split('=');
                        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
                    });
                }
    
                return { 
                    route, 
                    params: match.groups, 
                    query: query
                };
            }
        }
        return null;
    }
    
}
