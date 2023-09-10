import { initializeApp, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

export const app = initializeApp({
    credential: cert('./service-account.json'),
})

export const database = getDatabase();