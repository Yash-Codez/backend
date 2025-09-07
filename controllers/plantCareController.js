import PlantCare from "../models/PlantCare.js";

// Create Tip
export const createPlantCare = async (req, res) => {
  try {
    const { title, description, image, plantId } = req.body;
    const tip = new PlantCare({ title, description, image, plantId });
    await tip.save();
    res.status(201).json(tip);
  } catch (err) {
    res.status(500).json({ message: "Failed to create tip", error: err.message });
  }
};

// Get All Tips
export const getPlantCareTips = async (req, res) => {
  try {
    const tips = await PlantCare.find().sort({ createdAt: -1 });
    res.json(tips);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tips", error: err.message });
  }
};

// Get Single Tip
export const getPlantCareTip = async (req, res) => {
  try {
    const tip = await PlantCare.findById(req.params.id);
    if (!tip) return res.status(404).json({ message: "Tip not found" });
    res.json(tip);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tip", error: err.message });
  }
};

// Update Tip
export const updatePlantCare = async (req, res) => {
  try {
    const tip = await PlantCare.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tip) return res.status(404).json({ message: "Tip not found" });
    res.json(tip);
  } catch (err) {
    res.status(500).json({ message: "Failed to update tip", error: err.message });
  }
};

// Delete Tip
export const deletePlantCare = async (req, res) => {
  try {
    const tip = await PlantCare.findByIdAndDelete(req.params.id);
    if (!tip) return res.status(404).json({ message: "Tip not found" });
    res.json({ message: "Tip deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete tip", error: err.message });
  }
};
