import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
const firebaseConfig = {
  apiKey: 'AIzaSyA7eNDTovxQKYhYID5qlud6bDISFfZcgRI',
  authDomain: 'meetingnom.firebaseapp.com',
  projectId: 'meetingnom',
  storageBucket: 'meetingnom.appspot.com',
  messagingSenderId: '298264722028',
  appId: '1:298264722028:web:f1c672b8d8f23052ceb649',
  measurementId: 'G-YN5QRDWXL9',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const authentication = getAuth(app)
