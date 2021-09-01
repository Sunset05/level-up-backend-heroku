require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const { usersRouter } = require("./routes/users");
const { listingsRouter } = require("./routes/listings");
const { messagesRouter } = require("./routes/messages");

app.use(cors());
app.use(express.json());
app.use(usersRouter, listingsRouter, messagesRouter);

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
