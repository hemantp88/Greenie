import React from "react";
import "./login.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back!!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            illo, esse itaque veniam error sit qui earum vero voluptatum maiores
            fugit voluptates repellendus ab magnam dolore aliquid, facere nemo
            consequatur.
          </p>
          <span>Don't have an account?</span>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
