import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import uncaughtExceptionHandler from "./middleware/uncaughtExceptionHandler.js";
import unhandledRejectionHandler from "./middleware/uncaughtRejectionHandler.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "config/config.env" });
}

connectDB();


const server = app.listen(process.env.PORT||4001, () => {

});

process.on("uncaughtException", (error) => {
  uncaughtExceptionHandler(error, server);
});







app.get("/", (req, res) => {
  res.json({
    message: "working fine",
  });

  process.on("unhandledRejection", (error) => {
    unhandledRejectionHandler(error);
  });
});
