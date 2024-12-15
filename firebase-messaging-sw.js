// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3VyYi7ilIw0Q8VsA1sVJQW3AReFf1mUw",
  authDomain: "corci-plattkar.firebaseapp.com",
  projectId: "corci-plattkar",
  storageBucket: "corci-plattkar.firebasestorage.app",
  messagingSenderId: "19042333159",
  appId: "1:19042333159:web:bfc943bc4982da86c48d42",
  measurementId: "G-RSJD0GJPTW"
});

const messaging = firebase.messaging();
