import AsyncHandler from "../middleware/AsyncHandler.js";
import DataModel from "../models/ProductModel.js";
import CustomError from "../utils/CustomError.js";
import sendEmail from "../utils/SendEmail.js";

// Add new data
export const addData = AsyncHandler(async (req, res) => {
  const newData = req.body;
  const existingData = await DataModel.findOne({ Id: newData.Id });
  if (existingData) {
    const updatedData = await DataModel.findOneAndUpdate(
      { Id: newData.Id },
      newData,
      { new: true }
    );
    res.status(200).json(updatedData);
  } else {
    const maxIdData = await DataModel.findOne({}, {}, { sort: { Id: -1 } });
    const newId = maxIdData ? maxIdData.Id + 1 : 1;
    newData.Id = newId;
    const createdData = await DataModel.create(newData);
    res.status(201).json(createdData);
  }
});

// Get all data
export const getAllData = AsyncHandler(async (req, res) => {
  const data = await DataModel.find();
  res.status(200).json(data);
});

// Get data by ID
export const getDataById = AsyncHandler(async (req, res) => {
  const { Id } = req.params;
  const data = await DataModel.findById({ Id: Id });
  if (!data) {
    throw new CustomError("Data not found", 404);
  }
  res.status(200).json(data);
});

// Update data by ID
export const updateDataById = AsyncHandler(async (req, res) => {
  const { Id } = req.params;
  const updatedData = await DataModel.findByIdAndUpdate({ Id: Id }, req.body, {
    new: true,
  });
  if (!updatedData) {
    throw new CustomError("Data not found", 404);
  }
  res.status(200).json(updatedData);
});

// Delete data by ID
export const deleteDataById = AsyncHandler(async (req, res) => {
  const { Id } = req.params;
  const deletedData = await DataModel.findOne({ Id: Id });
  if (!deletedData) {
    throw new CustomError("Data not found", 404);
  }
  await deletedData.deleteOne();
  res.status(200).json({ message: "Successfully Deleted" });
});

export const sendDataByEmail = AsyncHandler(async (req, res, next) => {
  const { itemData } = req.body;
  const email = "Akashuiuxd@gmail.com";

  try {
    // Decorate itemData
    const decoratedData = itemData
      .map((item) => {
        return `
        
          ID: ${item.Id}
          Name: ${item.name}
        Phone Number: ${item.phoneNumber}
          Email: ${item.email}
          Hobbies: ${item.hobbies}
    
      `;
      })
      .join("");

    // Construct email message with decorated data
    const message = `
  Data is successfully sent to ${email}

  Item Data:
  ${decoratedData}

  Thank You, Akash
`;

    // Assuming sendEmail is a custom function for sending emails
    sendEmail({
      email: email,
      subject: "Data Sent",
      message: message,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return next(new CustomError(error, 500));
  }
});
