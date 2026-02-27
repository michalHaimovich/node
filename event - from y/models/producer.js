const mongoose = require('mongoose'); // ייבוא ספריית Mongoose לעבודה עם MongoDB, סכימות ומודלים

// הגדרת סכימת מפיק (Producer)
const producerSchema = new mongoose.Schema({ // יצירת אובייקט סכימה חדש
  name: { type: String, required: true }, // שדה 'name': מחרוזת, שדה חובה (שם המפיק)
  email: { type: String, required: true, unique: true }, // שדה 'email': מחרוזת, חובה, ואינדקס ייחודי למניעת כפילויות אימייל
  phone: { type: String }, // שדה 'phone': מחרוזת - טלפון המפיק (אופציונלי)
  shortDescription: { type: String }, // שדה 'shortDescription': תיאור קצר של המפיק (אופציונלי)
}, { timestamps: true }); // אופציות סכימה: timestamps מוסיף שדות createdAt ו-updatedAt אוטומטית

// יצירת מודל על בסיס הסכימה וייצואו לשאר הקבצים בפרויקט
module.exports = mongoose.model('Producer', producerSchema); // המודל נקרא 'Producer' וישמש ל‑CRUD בקונטרולרים
