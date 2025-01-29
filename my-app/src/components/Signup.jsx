import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } catch (error) {
        console.error("Sign-up Error:", error);
      }
    };
  
    return (
        <div>
              <Header />
              <p>Welcome to our Library App SignUp</p>
          {!user ? (
            <form onSubmit={handleSignUp}>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Sign Up</button>
            </form>
          ) : (
            <>
              <p>Welcome, {user.email}!</p>
              <button onClick={() => signOut(auth)}>Logout</button>
            </>
          )}
              <Footer />
        </div>
      );
    };
    
    export default SignUp;
  