
let express = require('express');
let app = express();
require('dotenv').config();
// console.log("Hello world");
// app.get('/',function(req,res){
//     res.send("Hello Express")
// });
// let absolutePath = __dirname + '/views/index.html';
// let cssPath = __dirname + '/public';

// app.use('/public',express.static(cssPath));

// app.get('/',function(req,res){
//     res.sendFile(absolutePath)
// });
// let jsonObject = {"message": "Hello json"};
app.get('/json',function(req, res){
    console.log(process.env.MESSAGE_STYLE);
    if(process.env.MESSAGE_STYLE === "uppercase" )
        res.json({"message": "Hello json".toUpperCase()});
    else
        res.json({"message": "Hello json"});
})
module.exports = app;































 module.exports = app;
