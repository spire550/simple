import mongoose, { Schema, Types } from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    age: { type: String },
    address: { type: String },
    medicalCheck: { type: String },
  },
  {
    timestamps: true,
  }
);
const patientModel = mongoose.model("Message", patientSchema);
export default patientModel;
