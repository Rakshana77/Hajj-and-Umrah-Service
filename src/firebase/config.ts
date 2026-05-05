import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCA8dE3DWrPIbn3oTONWH0upcQaAEgzZRg",
  authDomain: "hajj-service-96b15.firebaseapp.com",
  projectId: "hajj-service-96b15",
  storageBucket: "hajj-service-96b15.appspot.com",
  messagingSenderId: "500217211061",
  appId: "1:500217211061:web:6be2b401ea30e9b6c1f6fc",
  measurementId: "G-1LH2JV8S14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with robust persistence settings to mitigate internal BloomFilter errors
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

export const storage = getStorage(app);
export const analytics = getAnalytics(app);
