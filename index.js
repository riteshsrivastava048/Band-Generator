import express from "express" ;
import random_name from "random-name" ;

const app = express()
const port = 3000 

const today = new Date() ;
const day = String(today.getDate()).padStart(2, '0'); // Pad with leading zero if needed
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
const year = today.getFullYear() ;
const formattedDate = `${day} - ${month} - ${year}`;

app.use(express.static("public"))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    let name = random_name()
   res.render("index",{
    td : formattedDate
   })
})
app.get("/submit",(req,res)=>{
   let name = random_name()
   res.render("index",{
    nameSend:name,
    td:formattedDate
   })
})
app.listen(port,(req,res)=>{
    console.log(`Running on ${3000}`)
})