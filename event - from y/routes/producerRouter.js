const express = require('express');
const router = express.Router();
const { getProducerByEmail, postProducer, putProducer } = require('../controllers/producerController'); // ייבוא פונקציות הקונטרולר

// GET /producers/:email - מחזיר מפיק לפי אימייל
router.get('/:email', getProducerByEmail);
// POST /producers - יצירת מפיק חדש
router.post('/', postProducer);
// PUT /producers/:email - עדכון מפיק לפי אימייל
router.put('/:email', putProducer);

module.exports = router; // ייצוא הראוטר
