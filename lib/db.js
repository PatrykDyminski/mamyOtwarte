import admin from 'firebase-admin';

const serviceAccount = {
  projectId: process.env.FIRESTORE_PROJECT_ID,
  clientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
  privateKey: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "YOUR_DB_URL"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();