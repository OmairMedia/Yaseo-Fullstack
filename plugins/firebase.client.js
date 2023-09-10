import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


export default defineNuxtPlugin(async (nuxtApp) => {
  const config = await useRuntimeConfig();
  const firebaseConfig = {
      apiKey: config.public.FB_API_KEY,
      authDomain: config.public.FB_AUTH_DOMAIN,
      projectId: config.public.FB_PROJECT_ID,
      storageBucket: config.public.FB_STORAGE_BUCKET,
      messagingSenderId: config.public.FB_MESSAGING_SENDER_ID,
      appId: config.public.FB_APP_ID,
      databaseURL: config.public.FB_DATABASE_URL
  };

    // Initialize Firebase
    const app = await initializeApp(firebaseConfig);
    
     const database = getDatabase(app);
      // nuxtApp.vueApp.provide('database', database)
      // nuxtApp.provide('database', database)
      return {
        provide: {
          firebaseApp: app,
          database: database
        }
      }
})


