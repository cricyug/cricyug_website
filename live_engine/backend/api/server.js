
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

let match={
 team1:"India",
 team2:"Australia",
 score:"150/4",
 over:"16.3",
 lastBall:"4"
}

app.get("/api/live",(req,res)=>{
 res.json({data:match})
})

app.listen(5000,()=>{
 console.log("CricYug Live Engine running")
})
