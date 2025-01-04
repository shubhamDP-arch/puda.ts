import bodyParser from "body-parser"

export default function GLOBAL(req: Request, res: Response, next:()=> void){

}
function loggingMiddleware(req:Request, res:Response, next:()=>void){
  const isoDate = new Date().toISOString();
  const datePart = (isoDate.match(/^(.*?)T/) || [])[1] || "Invalid Date";
  console.log(`[${datePart}] ${req.method} ${req.url}`);
  next(); 
};
function logGlobal(req: Request, res: Response, next:()=> void){
  console.log("Hello there")
  next()
}
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
GLOBAL.middleware = [logGlobal, loggingMiddleware, jsonParser, urlencodedParser];
