import "./SignIn.css";

const SignIn = () => {
  const signIn = async () => {};

  const signUp = async () => {};

  return (
    <div className="signIn">
      <button onClick={signUp}>Sign-Up</button>
      <h2>Sign-In</h2>
      <form>
        <input type="text" placeholder="Email Address..." required />
        <input type="password" placeholder=" Password..." required />
        <button onClick={signIn}>Sign-In</button>
      </form>
    </div>
  );
};

export default SignIn;
