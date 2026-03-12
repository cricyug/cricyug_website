
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

let team={
 name:"India",
 country:"India",
 matches:1200,
 wins:700,
 ranking:1
}

app.get("/api/team",(req,res)=>{
 res.json({data:team})
})

app.listen(5000,()=>{
 console.log("CricYug Team System running")
})
