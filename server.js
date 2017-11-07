var //Inkscape = require('inkscape'),
    http = require('http'),
    pathModule = require('path');
//

http.createServer(function (req, res) {
    if (req.headers['content-type'] === 'image/svg+xml') {
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});

        req.pipe(new Inkscape([
          '--verb=EditDeselect',
          '--select=lasertext',
          '--select=bar',
          '--verb=SelectionUnion',
          '--verb=FileSave',
          '--verb=FileClose',
          '--verb=FileQuit'
        ])).pipe(res);

        //res.end('Got it!');
    } else {
        res.writeHead(400);
        res.end('Feed me an SVG!');
    }
}).listen(8080);
