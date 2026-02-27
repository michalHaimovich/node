const Producer = require('../models/producer'); // ייבוא מודל Producer

// מחזיר פרטי מפיק לפי האימייל (params.email)
async function getProducerByEmail(req, res, next) {
  try {
    const { email } = req.params; // קריאת פרמטר האימייל מהכתובת
    const producer = await Producer.findOne({ email }); // חיפוש במסד
    if (!producer) return res.status(404).json({ message: 'Producer not found' }); // 404 אם לא קיים
    res.json(producer); // החזרת האובייקט
  } catch (err) {
    next(err); // העברת השגיאה ל‑error middleware
  }
}

// יצירת מפיק חדש מבקשות POST
async function postProducer(req, res, next) {
  try {
    const { name, email, phone, shortDescription } = req.body; // קריאת נתונים מגוף הבקשה
    const producer = new Producer({ name, email, phone, shortDescription }); // יצירת מופע חדש
    await producer.save(); // שמירה במסד
    res.status(201).json(producer); // החזרת הישות שנוצרה
  } catch (err) {
    next(err); // העברת השגיאה
  }
}

// עדכון מפיק לפי אימייל (params.email)
async function putProducer(req, res, next) {
  try {
    const { email } = req.params; // קריאת האימייל לעדכון
    const update = req.body; // השדות לעדכון
    const producer = await Producer.findOneAndUpdate({ email }, update, { new: true, runValidators: true }); // עדכון והחזרת המופע המעודכן
    if (!producer) return res.status(404).json({ message: 'Producer not found' });
    res.json(producer);
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducerByEmail, postProducer, putProducer }; // ייצוא הפונקציות
