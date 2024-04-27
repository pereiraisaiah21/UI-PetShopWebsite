import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, set, push } from 'firebase/database'

export function initializeFirebase() {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
    }
    return initializeApp(firebaseConfig)
}

export function getDatabaseRef(folder) {
    const app = initializeFirebase()
    const database = getDatabase(app)
    return ref(database, folder)
}

export function getDataFromFolder(folder) {
    const databaseRef = getDatabaseRef(folder)
    return get(databaseRef)
}

export function addDataToFolder(folder, data) {
    const databaseRef = getDatabaseRef(folder)
    const newFolderDataRef = push(databaseRef)
    return set(newFolderDataRef, data)
}
