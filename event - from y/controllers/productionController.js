const Production = require('../models/production'); // ייבוא מודל Production

// חוזר רשימת אירועים, כולל populate לפרטי המפיק (name,email)
async function getEvents(req, res, next) {
  try {
    const events = await Production.find().populate('producerId', 'name email');
    res.json(events);
  } catch (err) {
    next(err);
  }
}

// פרטי אירוע לפי id
async function getEventById(req, res, next) {
  try {
    const { id } = req.params;
    const ev = await Production.findById(id).populate('producerId', 'name email');
    if (!ev) return res.status(404).json({ message: 'Event not found' });
    res.json(ev);
  } catch (err) {
    next(err);
  }
}

// יצירת אירוע חדש
async function postEvent(req, res, next) {
  try {
    const { type, title, description, producerId } = req.body;
    const ev = new Production({ type, title, description, producerId });
    await ev.save();
    res.status(201).json(ev);
  } catch (err) {
    next(err);
  }
}

// עדכון אירוע לפי id
async function putEvent(req, res, next) {
  try {
    const { id } = req.params;
    const ev = await Production.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!ev) return res.status(404).json({ message: 'Event not found' });
    res.json(ev);
  } catch (err) {
    next(err);
  }
}

// מחיקת אירוע לפי id
async function deleteEvent(req, res, next) {
  try {
    const { id } = req.params;
    const ev = await Production.findByIdAndDelete(id);
    if (!ev) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = { getEvents, getEventById, postEvent, putEvent, deleteEvent }; // ייצוא הפונקציות
