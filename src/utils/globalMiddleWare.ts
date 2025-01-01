export default function GLOBAL(req: Request, res: Response, next:()=> void){

}
function logGlobal(req: Request, res: Response, next:()=> void){
  console.log("Hello there")
  next()
}
GLOBAL.middleware = [logGlobal];