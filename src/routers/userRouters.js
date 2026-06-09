const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(201).json(user);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});


router.get("/",async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports = router;
