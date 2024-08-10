import express from "express";
import cors from "cors";
import restaurantsRouter from "./routes/restaurantsRouter.js";
import tagRouter from "./routes/tagRouter.js";
import connectToDatabase from "./db.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE"
}));

app.use(express.json());
connectToDatabase();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/restaurants", restaurantsRouter);
app.use('/api/v1/tags', tagRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
