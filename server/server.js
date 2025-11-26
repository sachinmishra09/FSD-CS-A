import http from 'http';

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === '/') {
    res.write("Home Page");
  } 
  else if (req.url === '/about') {
    res.write("About Page");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error: URL Not Found");
  }

  res.end();
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
