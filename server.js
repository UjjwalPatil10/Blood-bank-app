const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/test", require("./routes/testRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/inventory", require("./routes/inventoryRoutes"));
app.use("/analytics", require("./routes/analyticsRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
