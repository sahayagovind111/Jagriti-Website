import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: "AIzaSyCh0PGOGCuPPw6_eFIffC5ftALVzfhr9i4",
  authDomain: "jagriti-cc939.firebaseapp.com",
  projectId: "jagriti-cc939",
  storageBucket: "jagriti-cc939.appspot.com",
  messagingSenderId: "492550131268",
  appId: "1:492550131268:web:6f5c06a83905de3a52b611",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// Create an instance of the imported firebase utility

const FirebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {
  const [CollectionData, setCollectionData] = useState([]);
  // Create the required function for using the internal functions of the utility imported

  async function fetchEventData(collectionName) {
    try {
      const collectionData = await getDocs(collection(db, collectionName));

      collectionData.forEach((doc) =>
        setCollectionData((prev) => {
          return [...prev,doc.data()];
        })
      );

      console.log(CollectionData);
      return CollectionData;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally
        fetchEventData,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
