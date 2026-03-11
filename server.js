const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("."));

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando");
});
