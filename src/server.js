const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category")
const collectionDB2Router = require("./routes/collectionDB2")

app.use(express.json());
app.use("/", productRouter);
app.use("/", categoryRouter);
app.use("/", collectionDB2Router);

app.listen(9000, () => {
  console.log("Application is running on port 9000");
});
