import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC97Wpmd6KAKMMP9rG38hvnYi1KCAO8dVc",
  authDomain: "appcontabilidade-8414a.firebaseapp.com",
  projectId: "appcontabilidade-8414a",
});

const db = getFirestore(firebaseApp);
const companyCollectionRef = collection(db, 'companies');
const accountCollectionRef = collection(db, 'accounts');

export { db, companyCollectionRef, accountCollectionRef };