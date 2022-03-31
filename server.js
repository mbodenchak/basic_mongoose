// ============
// Mongoose Connection for server
// ============
const mongoose = require("mongoose");
const url =
  "mongodb+srv://mcb88:L3ftyGr0v3@cluster0.akd5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });

// ============
// Testing connection
// ============
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
// ============
// Importing Schema, and creating a new character w/ Schema
// ============

const Character = require("./models/Character");

const ryu = new Character({
  name: "Ryu",
  ultimate: "Shinku Hadoken",
});

ryu.save(function (error, document) {
  if (error) console.error(error);
  console.log(document);
});
