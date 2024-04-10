import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button onClick={logout}>Sign-Out</button>
    </div>
  );
};

export default Home;
