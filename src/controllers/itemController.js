import Item from "../models/itemModel.js";
export const addItem = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;

    if (!name || quantity == null || price == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Item({ name, quantity, price });
    await newItem.save();
    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding item", error: error.message });
  }
};
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ message: "Item retrieved successfully", items });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching items", error: error.message });
  }
};
