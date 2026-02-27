require('dotenv').config();
const { connectDB, mongoose } = require('../db');
const Producer = require('../models/producer');
const Production = require('../models/production');

async function seed() {
  try {
    await connectDB();

    // נקה אוספים קיימים (אופציונלי, לשלב פיתוח)
    await Producer.deleteMany({});
    await Production.deleteMany({});

    // ודא יצירת אינדקס ייחודי על אימייל
    await Producer.collection.createIndex({ email: 1 }, { unique: true });

    // דגימות מפיקים
    const producers = await Producer.insertMany([
      { name: 'אורה כהן', email: 'ora@example.com', phone: '050-1111111', shortDescription: 'מפיקת מוזיקה' },
      { name: 'דוד לוי', email: 'david@example.com', phone: '050-2222222', shortDescription: 'מפיק תיאטרון' }
    ]);

    // דגימות הפקות שמקשרות למפיקים שנוצרו
    const productions = await Production.insertMany([
      { type: 'concert', title: 'מופע ראשון', description: 'מופע מוזיקה בחסות...', producerId: producers[0]._id },
      { type: 'theatre', title: 'הצגה קלאסית', description: 'התנסות תיאטרלית', producerId: producers[1]._id }
    ]);

    console.log('Seed finished');
    console.log({ producers, productions });
    process.exit(0);
  } catch (err) {
    console.error('Seed error', err);
    process.exit(1);
  } finally {
    // סגור חיבור mongoose אם פתוח
    if (mongoose.connection.readyState) await mongoose.disconnect();
  }
}

seed();
