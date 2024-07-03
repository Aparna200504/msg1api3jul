const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/messages",(req,res) => {
	let m = [
	"The only way to achieve the impossible is to believe it is possible.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "The best way to predict the future is to create it.",
        "Success is not just about what you accomplish in your life, it's about what you inspire others to do.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "You are never too old to set another goal or to dream a new dream.",
        "The only person you are destined to become is the person you decide to be.",
        "If you want to achieve greatness stop asking for permission.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
        "The road to success and the road to failure are almost exactly the same.",
        "Success usually comes to those who are too busy to be looking for it.",
        "The only limit to our realization of tomorrow will be our doubts of today."
	];
	let r = parseInt(Math.random()*m.length);
	res.send({"msg":m[r]});
	
});

app.listen(9000,() => {console.log("ready to serve @9000")});