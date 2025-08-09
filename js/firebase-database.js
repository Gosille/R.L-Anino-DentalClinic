// Firebase Database Implementation for HMS

const FirebaseHMS = {
  // Authenticate user
  authenticate: async function(email, password, userType) {
    try {
      // Sign in with email and password
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Get user data from Firestore based on user type
      let userData = null;
      let collectionName = '';
      
      // Determine collection based on user type
      if (userType === 'admin') {
        collectionName = 'admins';
      } else if (userType === 'doctor') {
        collectionName = 'doctors';
      } else {
        collectionName = 'users';
      }
      
      // Query Firestore for user data
      const querySnapshot = await db.collection(collectionName)
        .where('email', '==', email)
        .limit(1)
        .get();
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        userData = { id: doc.id, ...doc.data() };
      }
      
      return userData;
    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }
};

// Make it globally available
window.FirebaseHMS = FirebaseHMS;