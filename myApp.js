
let express = require('express');
let app = express();
require('dotenv').config();
// console.log("Hello world");
// app.get('/',function(req,res){
//     res.send("Hello Express")
// });
// let absolutePath = __dirname + '/views/index.html';


app.get('/:word/echo', function(req, res, next) {
    // req.time = new Date().toString();
//   req.string = req.time; // Hypothetical synchronous operation
//   console.log(req.time);
    res.send({echo: req.params.word});
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


// 2. Static assets
app.use('/public', express.static(__dirname + '/public'));

// 3. Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});




























 module.exports = app;
