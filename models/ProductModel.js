import mongoose from "mongoose";



const dataSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("Data", dataSchema);

export default DataModel;
