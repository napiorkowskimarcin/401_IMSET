const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const PORT = process.env.PORT || 3000;
const Handlebars = require("handlebars");
const morgan = require("morgan");

app.use(express.static(path.join(__dirname, "public")));
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

app.use(express.static(path.join(__dirname, "public")));
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log("started");
});
