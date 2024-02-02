//  Module package CORE => node.js ni ichiga install qilib berilgan packagelar modeullar
setTimeout(function(){
 console.log("ishga tushdi");
},1000); // 2ta parametr oladi: 1-function, 2-Time ni oladi
let number = 0;
setInterval(() => {
    console.log("hisob" , number);
    number++;
}, 0);
 const fs = require('fs');  //core packagelarini call qilishimiz kerak (require) fs objetni bir qator methodlari , documention buyicha 2ta parametr pass qilinadi 1:"start": "node index.js",2: utf protokoli qullanildi
 const data = fs.readFileSync('./input.txt','utf8');  

console.log(data);
console.log("***************");




fs.writeFileSync("./input.txt",`${data} \n\t\t by Michael`);
const new_data = fs.readFileSync("./input.txt","utf8");  

console.log(new_data);



//  Module package EXTERNAL => foydalishdan oldin install qilinadi
const moment = require('moment');

setInterval(() => {
    const time = moment().format();
    console.log(`hozirgi vaqt ${time}`);
},5000);

//inquirer package
const inquirer = require("inquirer");
inquirer
.prompt([{type: "input", name: "raqam", message:"raqamni kiriting?"}])
.then((answer) =>{
console.log("man kiritgan raqam qiymati:", answer.raqam);
})
.catch((err) => console.log(err));


const validator = require("validator");
 const test = validator.isInt("100");
 const test1 = validator.isIP("175.208.119.125");

       
 
 console.log("test" , test1);



const { v4: uuidv4} = require('uuid');
const random = uuidv4();
console.log('random',random)
const chalk = require("chalk");
const log  = console.log;
const log1  = console.log;
log1(chalk.blue("Hello") + random + chalk.red("!"));
log(chalk.red(`uuid creates ${random}`));

// // // Module package FILE
// // // ^8.2.4