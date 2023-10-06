import { initializeApp, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

export const app = initializeApp({
    credential: cert('serviceAccount.json'),
    databaseURL: 'https://yaseo-fullstack-default-rtdb.europe-west1.firebasedatabase.app/'
})

export const database = getDatabase();