//console.log("Hello World")
//EX 2
//var http = require("http"); //  <==>  import http from "http"
// import http from "http"
// const Port = 5000
// http
//   .createServer((request, response) => {
//     response.end(`
    
//     <div>
//     <h1>Hello Node </h1>
//     <p> this my first project  </p>
//     <button> Submit </button>
// </div>
// <form>
// <label for="">Name</label>
// <input type="text">
// <label for="">email</label>
// <input type="email" name="" id="">
// <label for="">Message</label>
// <textarea name="" id="" cols="30" rows="10"></textarea>
// </form>
    
//     `);
//   })
//   .listen(Port, () => console.log("Serveur running on http://localhost:" + Port));

// EX 3


// import fs from "fs"
//   // creation file and data in the file 
// // fs.writeFile("welcome.txt", "Hello node", (err)=>
// //     {if (err) throw err;
// //     console.log("file is created")
    
// //     }
// // )

// // read data from file 

// fs.readFile("welcome.txt","utf8", (err, res)=>{
//     if (err) throw err;
//     console.log("this data getted from file : ", res)
// })


// EX 4

// import generate from "generate-password"


// var password = generate.generate({
//     length:12,
//     numbers:true,
//     symbols:true
// })

// console.log("this Pass generated : ", password )
// console.log("number of character : ", password.length)


// ex 5 


import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.net",
    port: 465,
    secure: true,
    auth: {
        user: "oussamaelkadhi1@gmail.com",
        pass: "uxez jbpa vyci zhxu",
    }
})

async function sendMailNode(){
    const info = await transporter.sendMail({
        from:"oussamaelkadhi1@gmail.com", 
        to:"elkadhioussama@gmx.fr, moslem.marzougui@gmail.com, alaajawachi5@gmail.com",
        subject :"test send mail with node", 
        text:"mar7ba bikom lawlad"
    })
    
    console.log("Mail Sended : ",  info.messageId )

}
sendMailNode()
