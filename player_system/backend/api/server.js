
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

let player={
 name:"Virat Kohli",
 country:"India",
 matches:500,
 runs:25000,
 wickets:8
}

app.get("/api/player",(req,res)=>{
 res.json({data:player})
})

app.listen(5000,()=>{
 console.log("CricYug Player System running")
})
