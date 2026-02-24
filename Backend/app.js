import http from "node:http";

import r from "./src/routers/router.js";

let server = http.createServer((req, res) => {
  
  r.router(req, res);
});

const port = 8080;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server is on http://${host}:${port}`);
});
