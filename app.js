const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.json({
        meta: {
            status:true,
            message:"aite\nNow that its working, lets see a revision",
            code:200
        }
    });
});

app.listen(port,()=> console.log(`Server running successfully on port ${port}`));

module.exports = app;
