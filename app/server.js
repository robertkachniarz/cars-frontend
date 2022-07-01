let express = require("express");
// const path = require("path");
let app = express();
app.use(express.static(__dirname + "/dist/app"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/app/index.html");
});
app.listen(process.env.PORT || 8080);
