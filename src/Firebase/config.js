import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBN3a3C-NM5OIqMwopFeVEbxDqJXi5yu9c",
    authDomain: "geek-hunt-6444f.firebaseapp.com",
    projectId: "geek-hunt-6444f",
    storageBucket: "geek-hunt-6444f.appspot.com",
    messagingSenderId: "974401807651",
    appId: "1:974401807651:web:72c6def730c162e7079896"
  };
  
  //const app = initializeApp(firebaseConfig);
export const app = initializeApp({ projectId: 'geek-hunt-6444f' });
//export const db = getFirestore(app)
export default firebaseConfig