import React from "react";
import "../app/aos.css";
import "../app/cssgg.css";
import "../app/custom.css";
import "../app/style.css";

import "../app/globals.css";
import Script from "next/script";
import Link from "next/link";

const SignUp = () => {
  return (
    <React.Fragment>
      <Script type="text/javascript" src="../app/aos.js" />
      <Script type="text/javascript" src="../app/other.js" />
      <div className="out">
        <article
          className="card same-p txt-center"
          style={{ maxWidth: 30 + "rem" }}
        >
          <h2 className="mt-1 mb-7">Sign Up</h2>

          <form method="post" action="#">
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Username"
              required
              className="px-5 py-2 mb-4 placeholder:font-normal placeholder:text-tahiti"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="px-5 py-2 mb-4 placeholder:font-normal placeholder:text-tahiti"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="px-5 py-2 mb-4 placeholder:font-normal placeholder:text-tahiti"
            />
            <button type="submit" className="w-100 p-2 ">
              Sign Up
            </button>
          </form>
          <div className="h-[2px] w-full bg-gray-500 mb-8 mt-8"></div>

          <button className="w-100 p-2 mb-4">or Sign Up with Google</button>

          <p className="mt-1">
            <small>
              Already have an account? <Link href="/login">Log In</Link>
            </small>
          </p>
        </article>
        <p className="txt-center mt-2">
          &copy; Visionary AI <span id="thisYear"></span>. Developed by{" "}
          <a href="index.html">Travolgi</a>.
        </p>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
