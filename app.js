let app = require("express")()

app.get("/",(req,res)=> {
	res.send("Welcome to App")
})


app.listen(9999,"running on port number 9999")