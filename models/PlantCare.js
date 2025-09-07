import mongoose from "mongoose";

const plantCareSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // optional
  plantId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // optional
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("PlantCare", plantCareSchema);
