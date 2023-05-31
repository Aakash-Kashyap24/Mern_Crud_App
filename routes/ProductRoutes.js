import express from "express";
import {
  addData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
  sendDataByEmail,
} from "../controllers/ProductController.js";

const router = express.Router();

// Add new data
router.post("/data", addData);

// Get all data
router.get("/data", getAllData);

// Get data by ID
router.get("/data/:id", getDataById);

// Update data by ID
router.put("/data/:id", updateDataById);

// Delete data by ID
router.delete("/data/:Id", deleteDataById);

// Send data by email
router.post("/data/send-email", sendDataByEmail);

const ProductRouter = router;
export default ProductRouter;
