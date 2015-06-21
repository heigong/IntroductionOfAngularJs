var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('app', {'index': ['todo.html']}));
app.use(serveStatic('demo_static'));
app.listen(8900);