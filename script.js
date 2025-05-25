// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDtEyuSQ9Q-pqf4nxiuW_W-oQvAKSjQMRw",
  authDomain: "portfolio-ce5b7.firebaseapp.com",
  projectId: "portfolio-ce5b7",
  storageBucket: "portfolio-ce5b7.firebasestorage.app",
  messagingSenderId: "201820381822",
  appId: "1:201820381822:web:e361bca3bfa6bd5696ae2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
const form = document.querySelector(".contact-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: serverTimestamp()
    });

    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to send message.");
  }
});
