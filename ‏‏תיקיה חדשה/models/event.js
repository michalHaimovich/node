// models/Book.js -> Production model
// מודל סוג הפקה לשימוש עם mongoose
const mongoose = require('mongoose');

const producerSubSchema = new mongoose.Schema({
  // מזהה מפיק משני, יכול להיות מספרי או מזהה פנימי
  id: { type: Number },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  shortDescription: { type: String }
}, { _id: false }); // לא ליצור _id לכל פריט במערך

const productionSchema = new mongoose.Schema({
  // מזהה מספרי יחודי לסוג ההפקה
  id: { type: Number, required: true, unique: true },
  // שם סוג ההפקה
  name: { type: String, required: true },
  // תאור/פרטים
  description: { type: String },
  // מזהה מפיק ראשי (מספרי) - optional
  producerId: { type: Number },
  // רשימת מפיקים משנית - מערך של מסמכי מפיקים פשוטים
  producers: { type: [producerSubSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Production', productionSchema);
