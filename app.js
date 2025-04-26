import express from "express";
import router from "./routes/authRoutes.js";

const app = express();

app.set("view engine", "ejs");
app.use('/auth/', router);
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");    
});