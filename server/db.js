const mongoose = require("mongoose");

//DB Connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err}`);
  });
