/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";

const SignInContainer = styled.div`
  height: 80vh;
  display: flex;
  padding: 30px 20px;
  align-items: center;
  flex-direction: column;

  & > div {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  & > div > h1 {
    margin: 15px;
    font-size: 3em;
    color: #8b5cf6;
    margin-bottom: 0;
    text-align: center;
  }

  & > div > h2 {
    margin: 15px;
    color: #8b5cf6;
    font-size: 1.2em;
    text-align: center;
  }

  @media (max-width: 380px) {
    padding: 0;
  }
`;

const SignInFormContainer = styled.form`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > input {
    width: 300px;
  }
`;

function SignInPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (
      (localStorage.getItem("user") || sessionStorage.getItem("user")) !== null
    ) {
      navigate("/");
      toast("You Current Sign In You Must To Sign In Again");
    }
  }, []);

  const handleSignIn = () => {
    if (username.length === 0) {
      return toast("Username cannot be empty");
    }

    if (password.length === 0) {
      return toast("Password cannot be empty");
    }

    setIsLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then(({ data }) => {
        navigate("/");
        auth.signIn(!rememberMe, data);
        toast(`Welcome Back!👋 ${data.firstName}`);
      })
      .catch((err) => {
        console.log(err);
        toast("Invalid Credentials");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SignInContainer>
      <div>
        <h1>Sign In</h1>
        <h2>Welcome Back Again!👋</h2>
        <SignInFormContainer>
          <Input
            value={username}
            placeholder="Username or Email"
            onInput={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            label="Remember Me"
            value={rememberMe}
            onChange={() => setRememberMe((rememberMe) => !rememberMe)}
          />
        </SignInFormContainer>
        <Button
          disabled={isLoading}
          onClick={handleSignIn}
          className={isLoading ? "loading" : null}
        >
          {isLoading && <span className="loading"></span>}
          Sign In
        </Button>
      </div>
    </SignInContainer>
  );
}

export { SignInPage };
