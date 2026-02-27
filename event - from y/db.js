require('dotenv').config(); // טוען משתני סביבה מקובץ .env
const mongoose = require('mongoose'); // ייבוא Mongoose לעבודה מול MongoDB

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/eventMichal'; // מחרוזת חיבור ל־MongoDB (מקובץ .env או ברירת מחדל)

async function connectDB() { // פונקציה אסינכרונית לפתיחת חיבור למסד
  try {
    // הדפס את ה‑URI כדי לוודא לאיזה DB מתחברים
    console.log('Connecting to MongoDB URI:', uri);
    // הסרה של אופציות מיושנות (useNewUrlParser, useUnifiedTopology) כדי למנוע MongoParseError
    await mongoose.connect(uri);
    console.log('MongoDB connected'); // הודעה בקונסול במקרה של הצלחה
  } catch (err) {
    console.error('MongoDB connection error', err); // לוג שגיאה
    throw err; // זורק את השגיאה כלפי חוץ כדי לטפל מראש (app.js)
  }
}

module.exports = { connectDB, mongoose }; // מייצא את connectDB ואת עצם mongoose לשימוש בקבצים אחרים
