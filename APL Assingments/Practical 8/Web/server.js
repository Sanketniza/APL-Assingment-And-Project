// server.js

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  const parsedUrl = url.parse(req.url, true);
  const { query } = parsedUrl;

  let resultMessage = ''; // This will hold our answer
  
  if (query.num1 && query.num2 && query.op) {
    
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);
    const op = query.op;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      resultMessage = '<h3>Error: Please enter valid numbers.</h3>';
    } else {
      switch (op) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            result = 'Error: Cannot divide by zero.';
          } else {
            result = num1 / num2;
          }
          break;
        case 'modulo':
          result = num1 % num2;
          break;
        default:
          result = 'Error: Invalid operation.';
      }
      
      resultMessage = `<h3>Result: ${result}</h3>`;
    }
  }

  const htmlPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Node.js Calculator</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        form { margin-top: 10px; }
        input { margin-bottom: 10px; padding: 5px; }
        button { padding: 5px 10px; margin-right: 5px; cursor: pointer; }
      </style>
    </head>
    <body>
      <h1>Node.js Web Calculator</h1>
      
      ${resultMessage}
      
      <form action="/" method="GET">
        <div>
          <label>Number 1:</label>
          <input type="number" name="num1" step="any" required>
        </div>
        <div>
          <label>Number 2:</label>
          <input type="number" name="num2" step="any" required>
        </div>
        <div>
          <button type="submit" name="op" value="add">+</button>
          <button type="submit" name="op" value="subtract">-</button>
          <button type="submit" name="op" value="multiply">*</button>
          <button type="submit" name="op" value="divide">/</button>
          <button type="submit" name="op" value="modulo">%</button>
        </div>
      </form>
    </body>
    </html>
  `;
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlPage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});