import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA7eNDTovxQKYhYID5qlud6bDISFfZcgRI',
  authDomain: 'meetingnom.firebaseapp.com',
  projectId: 'meetingnom',
  storageBucket: 'meetingnom.appspot.com',
  messagingSenderId: '298264722028',
  appId: '1:298264722028:web:f1c672b8d8f23052ceb649',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
