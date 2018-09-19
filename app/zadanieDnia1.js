const http = require('http');
const text = 'Hello, World from back-end!';

const srv = http.createServer((req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.end(text);
})

srv.listen(3000, () => {
		console.log('Serwer uruchomiony na porcie 3000');
})
