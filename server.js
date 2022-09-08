const http = require('http');
const fs = require('fs');
const _ = require('lodash'); // common way to name lodash module

const server = http.createServer((req, res) => {

    // --lodash--

    // --lodash random()

    const num = _.random(0, 20);
    console.log(num);

    // --lodash runs a function only once

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    //console.log('request made');

    //console.log(req);
    //console.log(req.url, req.method);

    // --write plain text

    //res.setHeader('Content-Type', 'text/plain');
    //res.write('hello, ninja!');
    //res.end();

    // --write html 

    //res.setHeader('Content-Type', 'text/html');
    //res.write('<head><link rel="stylesheet" type="text/css" href="#"></head>');
    //res.write('<p>hello ninjas!</p>');
    //res.write('<p>hello again ninjas!!</p>');
    //res.end();

    // --returning html page

    /*
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            //res.end();

            // quicker way to write single html page
            res.end(data);
        }
    });
*/

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about--me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('listening to request on port 3000');
});