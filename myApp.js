let express = require('express');
let app = express();
console.log("Hello world");
// app.get('/',function(req,res){
//     res.send("Hello Express")
// });
let absolutePath = __dirname + '/views/index.html';
let cssPath = __dirname + '/public';

app.use('/public',express.static(cssPath));

app.get('/',function(req,res){
    res.sendFile(absolutePath)
});
































 module.exports = app;
