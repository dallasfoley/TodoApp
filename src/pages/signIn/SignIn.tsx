import "./SignIn.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const signIn = async () => {};

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signIn">
      <button onClick={signUp} className="signUp">
        Sign-Up
      </button>
      <h2>Sign-In</h2>
      <form>
        <input
          type="text"
          placeholder="Email Address..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder=" Password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={signIn}>Sign-In</button>
        <h3>or</h3>
        <button onClick={signInWithGoogle}>Sign-In with Google</button>
      </form>
    </div>
  );
};

export default SignIn;
