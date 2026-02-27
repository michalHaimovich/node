// db.js - חיבור ל‑MongoDB באמצעות mongoose
// שים לב: קובץ זה קורא את המשתנה MONGODB_URI מקובץ .env

// טוען משתני סביבה מקובץ .env הממוקם באותה תיקיה של הקובץ הזה
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// מייבא את הספריה mongoose לניהול החיבור וה‑ODM
const mongoose = require('mongoose');

// קורא את מחרוזת החיבור מהמשתנים הסביבתיים
// אם לא מוגדר, זורק שגיאה שתעצור את התוכנית ותצביע על הבעיה
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('MONGODB_URI missing in .env');
}

// אופציות חיבור מומלצות: שימוש ב‑new URL parser ו‑unified topology
// set('strictQuery', false) משבית אזהרות של mongoose בגרסאות חדשות
mongoose.set('strictQuery', false);

// מבצע חיבור ונותן לוג להצלחת/כישלון החיבור
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    // יציאה עם קוד שגיאה כדי למנוע המשך ריצה במצב לא מחובר
    process.exit(1);
  });

// מייצא את האובייקט mongoose למקרה שרוצים להשתמש בו ישירות
module.exports = mongoose;
