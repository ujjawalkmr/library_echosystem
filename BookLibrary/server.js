const app = require("./app");


// app.get("/", (req,res)=>{
//     res.send("Backend Running");
// });

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`)
})






