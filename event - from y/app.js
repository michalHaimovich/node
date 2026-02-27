// טען משתני סביבה
require('dotenv').config();
const express = require('express'); // ייבוא Express ליצירת השרת והראוטים
const cors = require('cors'); // ייבוא CORS כדי לאפשר בקשות מהפרונטאנד
const { connectDB } = require('./db'); // ייבוא פונקציית חיבור למסד והאובייקט mongoose
const productionRouter = require('./routes/productionRouter'); // ראוטר להפקות/אירועים
const producerRouter = require('./routes/producerRouter'); // ראוטר למפיקים

const app = express(); // יצירת אפליקציית Express

// Middlewares
app.use(cors()); // מאפשר קריאות מהפרונטאנד
app.use(express.json()); // מאפשר קריאת JSON בגוף הבקשות (POST/PUT)

// Mount routers - כל הלוגיקה של CRUD צריכה להיות בקונטרולרים/ראוטרים
app.use('/producers', producerRouter);
app.use('/productions', productionRouter);

// נקודת בריאות בסיסית
app.get('/', (req, res) => res.json({ status: 'ok', project: 'events' }));

// middleware לטיפול בשגיאות - שגיאות שמועברות ל-next(err) יגיעו לכאן
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// התחלת השרת לאחר חיבור למסד הנתונים
connectDB().then(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}).catch(err => {
  console.error('Failed to start server due to DB connection error');
  process.exit(1);
});

module.exports = app; // ייצוא ה‑app לשימוש בבדיקות או במודולים חיצוניים
