const express = require("express");
const router = express.Router();
const HomeSchema = require("./HomeSchema")

router.post("/post-home", async (req, res) => {
    const homeData = req.body;
    try {
      const HomeData = new HomeSchema(homeData);
      await HomeData.save();
      res.json({ status: "OK", message: "Home Data send successfully" });
    } catch (error) {
      console.error("Error feedback:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get('/get-home',async(req,res) =>{
    try{
        let getHomeData = await HomeSchema.find();
        res.status(200).json(getHomeData)
    }catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
  })



module.exports = router;