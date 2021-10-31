import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword,onAuthStateChanged, signOut , updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();



const useFirebase = () => {
    const [user,setUser] = useState({});
     const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = () => {
    // console.log("hello")
     setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
   }
    
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // console.log(user)
        setUser(user)
      }
      else{
        setUser({})
      }
       setIsLoading(false)
    })
  },[])

  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
signOut(auth)
.then(() => {
  setUser({})
})
 .finally(() => setIsLoading(false))
.catch((error) => {
})
  }
  // register
  const createIdWithEmailAndPassword = (email, password,name) => { 
    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    //  console.log(result.user);
    updateProfile(auth.currentUser, {
      displayName: name})
      .catch((error) => {
    });

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });

  }
  const handleLogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
   
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }

    return {
      user,
        error,
        signInUsingGoogle,
        createIdWithEmailAndPassword,
        handleLogInUser,
         logOut,
         isLoading
    };
};

export default useFirebase;