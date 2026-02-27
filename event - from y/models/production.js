const mongoose = require('mongoose'); // ייבוא Mongoose
const { Schema } = mongoose; // קיצור לשימוש ב־Schema

// הגדרת סכימת Production (הפקה/אירוע)
const productionSchema = new Schema({
  type: { type: String, required: true }, // שדה 'type': סוג ההפקה (למשל: מופע, הצגה) - חובה
  title: { type: String, required: true }, // שדה 'title': כותרת/שם ההפקה - חובה
  description: { type: String }, // שדה 'description': תיאור/פרטים של ההפקה - אופציונלי
  producerId: { type: Schema.Types.ObjectId, ref: 'Producer', required: true }, // שדה 'producerId': קישור ל־Producer באמצעות ObjectId - חובה
}, { timestamps: true }); // אופציות סכימה: timestamps מוסיף createdAt ו‑updatedAt

// יצירת המודל וייצואו לשימוש בשאר הקבצים (controllers/routers)
module.exports = mongoose.model('Production', productionSchema); // מודל 'Production'
