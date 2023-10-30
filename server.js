const express = require('express')      ;
const path    = require('path')         ;
const port    = process.env.PORT || 3000;

const app     = express()               ;

app.use("/static", express.static(path.resolve(__dirname, 'src', 'static')));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, () => {
    console.log(`Server running on port ${port}!/`);
});