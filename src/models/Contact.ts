import { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
  },
  { timestamps: true },
);

export const Contact = models.Contact || model("Contact", contactSchema);
