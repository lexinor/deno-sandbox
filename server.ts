import { serve } from "https://deno.land/std@0.76.0/http/server.ts";

const server = serve({ port: 4545 });
console.log("http://localhost:4545/");

for await (const req of server) {
  const url = req.url;

  switch (url) {
    case "/":
      req.respond({ body: `Welcome to ${url} \n` });      
      break;
    case "/page1":
      req.respond({ body: `Welcome to ${url} \n` });
      break;  
    default:
      req.respond({ body: `Error\n` });
      break;
  }  
}