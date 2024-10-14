import React, { useState } from "react";
import { supabase } from "./Supabase";
import AdminPage from "../Admin/Admin";
import "./auth.css";

const Login = () => {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error("Login error:", error.message);
    else setSession(data.session);
  };

  return (
    <div>
      {session ? (
        <AdminPage session={session} />
      ) : (
        <div className="auth-container">
          <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
