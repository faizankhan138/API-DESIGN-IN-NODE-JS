const connectdb = require("./util/db");
const express = require("express");
const categoryRoutes = require("./routes/routes");
const env = require("dotenv");
env.config();
const app = express();
const host = process.env.HOST 
const port = process.env.PORT 
connectdb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.use("/api", categoryRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
console.log(host)
console.log(port)