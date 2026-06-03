const express = require("express");
const cors = require("cors");

const musicRoutes = require("./routes/musicRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", musicRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});