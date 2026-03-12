
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

let matches=[]

app.post("/api/admin/match",(req,res)=>{

 const m={
  team1:req.body.team1,
  team2:req.body.team2,
  venue:req.body.venue
 }

 matches.push(m)

 res.json({data:m})
})

app.get("/api/admin/matches",(req,res)=>{
 res.json({data:matches})
})

app.listen(5000,()=>{
 console.log("CricYug Admin Panel API running")
})
