
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

const matches=[
{team1:"India",team2:"Australia",status:"Live",score:"145/3 (15.2)",venue:"Mumbai"},
{team1:"England",team2:"Pakistan",status:"Upcoming",score:"-",venue:"Lords"},
{team1:"New Zealand",team2:"South Africa",status:"Upcoming",score:"-",venue:"Auckland"}
]

app.get("/api/matches",(req,res)=>{
 res.json({data:matches})
})

app.listen(5000,()=>{
 console.log("CricYug API running")
})
