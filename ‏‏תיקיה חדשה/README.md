התקנה וחיבור MongoDB

קבצים שנוצרו בתיקיה זו:
- `db.js` - חיבור ל‑MongoDB באמצעות mongoose. קורא את `MONGODB_URI` מ‑`.env`.
- `models/Author.js` ו‑`models/Book.js` - מודלים לשימוש עם mongoose.
- `scripts/importLesson9Data.js` - סקריפט שמייבא את `lesson9/authors.json` ו‑`lesson9/books.json` אל MongoDB.

הוראות שימוש:
1. ודא שקובץ `.env` בשורש מכיל את השורה:
   `MONGODB_URI=mongodb://localhost:27017/EventDBmichal`

2. התקן תלות `mongoose` אם עדיין לא מותקן:
   `npm install mongoose dotenv`

3. לשלב חיבור באפליקציה הראשית, הוסף לפני שימוש במודלים:
   `require('./‏‏תיקיה חדשה/db');`

4. להריץ סקריפט הייבוא:
   `node ‏‏תיקיה חדשה/scripts/importLesson9Data.js`

הערות:
- הסקריפט מניח שהקבצים `lesson9/authors.json` ו`lesson9/books.json` קיימים ושדותיהם תואמים למודלים שנוצרו.
- אם יש חוסר התאמה בשדות יש לעדכן את המודלים או את קבצי ה‑JSON.
