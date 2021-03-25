const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT, () => console.log(`started on `));
