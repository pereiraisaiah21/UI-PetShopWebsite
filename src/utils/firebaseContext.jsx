import React, { createContext } from 'react'
import { initializeFirebase, getDataFromFolder, addDataToFolder } from './firebase'

export const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
    initializeFirebase()

    return (
        <FirebaseContext.Provider
            value={{
                getDataFromFolder,
                addDataToFolder
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}
