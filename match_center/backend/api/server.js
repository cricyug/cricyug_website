
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

let match={
 team1:"India",
 team2:"Australia",
 score:"185/6",
 overs:"20",
 topBatter:"Kohli 72 (45)",
 topBowler:"Starc 3/28"
}

app.get("/api/scorecard",(req,res)=>{
 res.json({data:match})
})

app.listen(5000,()=>{
 console.log("CricYug Match Center running")
})
