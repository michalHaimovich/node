// models/Producer.js - מודל מפיק (Producer) לשימוש עם mongoose
const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
  // מזהה מספרי יחודי של המפיק (אם יש במקורות שלך)
  id: { type: Number, required: true, unique: true },
  // שם המפיק
  name: { type: String, required: true },
  // אימייל ליצירת קשר
  email: { type: String },
  // טלפון ליצירת קשר (מחרוזת כדי לאפשר פורמטים שונים)
  phone: { type: String },
  // תאור קצר של המפיק
  shortDescription: { type: String }
}, { timestamps: true });

// שם המודל ב‑Mongo יהיה 'Producer'
module.exports = mongoose.model('Producer', producerSchema);
