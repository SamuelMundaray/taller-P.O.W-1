import * as http from 'http';

import app from './app/server.js';

const httpserver = http.createServer(app);

httpserver.listen(app.get("port"),"0.0.0.0",() => {console.log(`Server runing - Port ${app.get("port")}`)});