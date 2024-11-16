const config = require("./config");
require("./config/database");

const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "application is running" }));
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`application is running on http://localhost:${config.port}`);
});
