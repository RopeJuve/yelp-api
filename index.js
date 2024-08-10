import express from "express";
import restaurantsRouter from "./routes/restaurantsRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1/restaurants', restaurantsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
