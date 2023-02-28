import { createContext, useContext, useState, } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";



// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


// Create an instance of the imported firebase utility


const FirebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {

  const [EventData, setEventData] = useState([]);
  // Create the required function for using the internal functions of the utility imported





  async function fetchCollectionData(collectionName) {
    try {
      const collectionData = await getDocs(collection(db, collectionName));
      
      if(collectionName === "events"){
        setEventData([]);
        collectionData.forEach((doc) =>
          setEventData((prev) => {
            return [...prev,doc.data()];
          })
        );
  
        // console.log(EventData);
      }
     
     
    } catch (error) {
      console.log(error);
    }
  }

  // Create the required function for using the internal functions of the utility imported

  const addDocument = async (dbType, data) => {
    try {
      await addDoc(collection(db, dbType), data);

      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  


  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally
        fetchCollectionData,
        addDocument,
        EventData,
      
        
        
        
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
