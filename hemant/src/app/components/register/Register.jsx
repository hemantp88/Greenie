import React from "react";
import Link from "next/link";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="cardr">
        <div className="left1">
          <h1>User Mangement</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            illo, esse itaque veniam error sit qui earum vero voluptatum maiores
            fugit voluptates repellendus ab magnam dolore aliquid, facere nemo
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right1">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="number" placeholder="Phone Number" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
