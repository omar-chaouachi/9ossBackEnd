const express = require("express");
const db = require("../../../Database/Controller/admins.js");
const router = express.Router();
router.post('/newEvents',async (req,res)=>{
  let homeTeam = req.body.homeTeam;
  let awayTeam= req.body.awayTeam;
  let place= req.body.place;
  let category= req.body.category;
  let date= req.body.date;
  let description = req.body.description;
  console.log(req.body)
   await db.addNewEvent(homeTeam,awayTeam,place,category,date,description)
  .then(data=>{
      console.log(data)
      res.json(data)
  })
  .catch(error=>{
      console.log(error);
  })
});

<
router.post('/newSeats', async (req, res) => {
    let type = req.body.type;
    let number = req.body.Number;
    let availability = req.body.availability;
    console.log(req.body)
    await db.addNewSeat(type, number, place, availability)
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(error => {
            console.log(error);
        })
});

router.delete("/seats", async (req, res) => {
    await db.deleteAllSeats(req.body)
        .then(results => {

            res.json("all seats deleted ");
        })
        .catch(error => {
            console.log(error);
        })
});


router.delete("/newEvents", async (req, res) => {
    await db.deleteAllEvents(req.body)
    .then(results=>{

        res.json("all events deleted ");
    })
    .catch(error=>{
        console.log(error);
    })
  });
  router.put("/events", async (req,res)=>{
      await db.updateEventInfo(req.body)
      .then(results =>{
          res.json(results)
      })
      .catch(error=>{
          console.log(error)
      })
  })

module.exports = router;