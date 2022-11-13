const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short hisotry')
    }
    res.end(`
     <h1>Oops!</h1>
     <p> Ceci est un paragraphe<p>
     <a href="/">
     `)
})

server.listen(5000)