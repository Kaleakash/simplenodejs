let app = require("express")()

app.get("/",(req,res)=> {
	res.send("Welcome")
})
app.listen(9999,()=>console.log("runnin on servrer on 9999"))