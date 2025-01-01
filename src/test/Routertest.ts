// import { Router } from "../core/Router";

// import { IncomingMessage, ServerResponse } from "http";

// // Create a Router instance
// const router = new Router();

// // Define and add a route
// router.addRoute({
//     path: "/users/[id]",
//     method: "GET",
//     callback: (req: IncomingMessage, res: ServerResponse, params:any) => {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: `User ID is ${params?.id}` }));
//     },
// });

// const method = "GET";
// const url = "/users/123";
// const match = router.matchRoute(method, url);
// console.log(match)

// if (match) {
//     console.log("Matched Route:", match.route);
//     console.log("Params:", match.params);

//     const req = {} as IncomingMessage; // Mock request
//     const res = {
//         writeHead: (status: number, headers: Record<string, string>) =>
//             console.log(`Response Status: ${status}, Headers:`, headers),
//         end: (body: string) => console.log(`Response Body: ${body}`),
//     } as unknown as ServerResponse;

//     match.route.callback(req, res, match.params);
// } else {
//     console.log("No match found.");
// }
