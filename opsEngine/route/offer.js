const express = require("express");
const router = express.Router();
const { offer } = require("../schema/offer-schema");
const jwt = require("jsonwebtoken");
const SECTER_CODE = "Qwdseew344e43esd4";

const getUserByToken = (token) => {
 return new Promise((resolve, reject) => {
    if (token) {
      let userData;
      try {
        userData = jwt.verify(token, SECTER_CODE);
        resolve(userData);
      } catch (err) {
        reject("Invalid Token");
      }
    } else {
      reject("Token not found");
    }
  });
};



router.get("/list", async (req, res) => {
    const validOffers = [];
    offer.find().then((offers)=> {
        offers.filter((offer)=> {
            const rules = offer.target.split("and")
            //['age > 30', 'installed_days < 5']
            rules.forEach((rule)=> {
                let ruleKey = {}
                if(rule.includes(">")) {
                    ruleKey = {key: rule.trim().split(">")[0].trim(), value: parseInt(rule.trim().split(">")[1]) }
                    if(req.body[ruleKey.key] > ruleKey.value) {
                        validOffers.push(offer)
                        console.log()
                    }
                    
                } else {
                    ruleKey = {key: rule.trim().split("<")[0], value: rule.trim().split("<")[1]}
                    if(req.body[ruleKey.key] < ruleKey.value) {
                        validOffers.push(offer)
                    }
                    console.log(validOffers)
                }
            })
        })
        res.status(200).send(validOffers);
    }).catch(()=> {
        res.status(500).send("Internal Server Error")
    })

});



router.post("/create", async (req, res) => {
  //finding the user
  getUserByToken(req.headers.authorization).then((user)=>{
    // res.status(200).send(user);
    //creating an offer
    offer.create({...req.body,username:user.username}).then((offer)=>{
        res.status(200).send(offer)
    }).catch((err)=>{
        res.status(400).send({message:err.massage})
    })
  }).catch((err)=>{
    res.status(400).send(err);
  })
});



router.put('/update',async()=>{
    //
offer.updateOne("")
})


router.put('/delete',async()=>{
offer.deleteOne({offer_id:req.body.id})
})

module.exports = router;
