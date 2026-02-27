const express = require('express');
const router = express.Router();
const { getEvents, getEventById, postEvent, putEvent, deleteEvent } = require('../controllers/productionController'); // ייבוא פונקציות הקונטרולר

// GET /productions - רשימת אירועים
router.get('/', getEvents);
// GET /productions/:id - פרטי אירוע
router.get('/:id', getEventById);
// POST /productions - יצירת אירוע
router.post('/', postEvent);
// PUT /productions/:id - עדכון אירוע
router.put('/:id', putEvent);
// DELETE /productions/:id - מחיקת אירוע
router.delete('/:id', deleteEvent);

module.exports = router; // ייצוא הראוטר
