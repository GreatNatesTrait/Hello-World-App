const express = require("express");

const app = express();
const port = process.env.port || 8000;

app.get("/",(req,res)=>{
    res.json({
        meta: {
            status:true,
            message:"aite",
            code:200
        }
    });
});

app.listen(port,()=> console.log(`Server running successfully on port ${port}`));

module.exports = app;