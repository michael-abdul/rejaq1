console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");


// 1 Kirish kodlari: expressga kirib kelayotgan ma'lumotlarga  bog'liq bo'lgan kodlar yoziladi
app.use(express.static("public")); // har qanday browwserdan kirib kelayotgan clientlarga ochib beradi
app.use(express.json()); // kirib kelayotgan json formatdagi datani objectga ogirib beradi
app.use(express.urlencoded({extended:true})); //html dan traditoinal form dan post qiladi yozmasak ignore qiladi
 
// 2  session lar ga borgliq code


// 3 views ga bogliq codelar
app.set("views", "views"); //folderni korsatamiz
app.set("view engine", "ejs"); //view engiine ejs ekanligini korsatdik  ejs orqali html yasaymiz 



// 4 Routing codelar : bu yerda router larni shakllantiramiz
// app.get("/hello",function(req, res){
//     res.end(`<h1 style="background:red">Hello World by Michael</h1>`);
// });
// app.get("/gift",function(req, res){
//     res.end(`<h1 style="background:blue">Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req,res) => {
    console.log(req.body);
    res.json({test:"success"});
});

app.get('/', function(req,res){
    res.render('harid');
});
const server = http.createServer(app); //serverni shakllantiramiz va bitta parametr qabul qiladi
let PORT = 3000;
server.listen(PORT, function(){ //serverni biror portga listen qildirish kerak
    console.log(`Server muvafaqqiyatli ishlayapti: ${PORT}`);
});