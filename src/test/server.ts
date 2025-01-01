import {Server, initializeRouter} from "../NodeLink"

const router = initializeRouter('./testSrc')

const server = new Server(router);
server.start(4000, () => console.log('Server running at http://localhost:4000'));
