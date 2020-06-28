import { createServer } from "src/server";

createServer()
    .then(res => {
        console.log("Server has started");
    })
    .catch(error => {
        console.log("Start server error: " + error);
    });
