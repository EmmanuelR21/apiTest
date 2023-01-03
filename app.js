const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("testing");
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
