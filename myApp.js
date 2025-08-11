
let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
// console.log("Hello world");
// app.get('/',function(req,res){
//     res.send("Hello Express")
// });
// let absolutePath = __dirname + '/views/index.html';


// app.get('/name', function(req, res, next) {
//     res.send({name:req.query.first + " " +req.query.last})
//   next();
// });


// // let jsonObject = {"message": "Hello json"};
// // console.log(process.env.MESSAGE_STYLE);

// // app.get('/json',function(req, res){
    
// //     if(process.env.MESSAGE_STYLE === "uppercase" )
// //         res.json({"message": "Hello json".toUpperCase()});
// //     else
// //         res.json({"message": "Hello json"});
// // })

// // module.exports = app;


// // 2. Static assets
// app.use('/public', express.static(__dirname + '/public'));

// // 3. Routes
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });




app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// / GET handler for /name
// app.get("/name", (req, res) => {
//   const firstName = req.query.first;
//   const lastName = req.query.last;
//   res.json({ name: `${firstName} ${lastName}` });
// });

// POST handler for /name
app.post("/name", function(req,res){
  var string = req.body.first + ' ' + req.body.last;
  res.json({name: string});
})

module.exports = app;
