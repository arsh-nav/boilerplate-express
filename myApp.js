
let express = require('express');
let app = express();
require('dotenv').config();
// console.log("Hello world");
// app.get('/',function(req,res){
//     res.send("Hello Express")
// });
// let absolutePath = __dirname + '/views/index.html';
let cssPath = __dirname;

app.use('/',express.static(cssPath));

app.get('/',function(req,res,next){
    let requestLog = req.method + " "+ req.path + " - "+ req.ip;
    console.log(requestLog);
    next();
});
// let jsonObject = {"message": "Hello json"};
// console.log(process.env.MESSAGE_STYLE);

// app.get('/json',function(req, res){
    
//     if(process.env.MESSAGE_STYLE === "uppercase" )
//         res.json({"message": "Hello json".toUpperCase()});
//     else
//         res.json({"message": "Hello json"});
// })

// module.exports = app;































 module.exports = app;
