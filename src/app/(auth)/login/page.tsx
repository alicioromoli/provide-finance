"use client";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { EmailInput } from "./_components/EmailInput";
import { PasswordInput } from "./_components/PasswordInput";
import { redirect, useRouter } from "next/navigation";
import { isUserLoggedIn } from "../../utils/isUserLoggedIn";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const hasUserLoggedIn = isUserLoggedIn();

  useEffect(() => {
    if (hasUserLoggedIn) {
      redirect("/");
    }
  }, [hasUserLoggedIn]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      try {
        const loginResponse = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (loginResponse.ok) {
          router.push("/");
        }
      } catch (error) {
        console.error("Login failed");
      }
    }
  };

  return (
    !hasUserLoggedIn && (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <EmailInput ref={emailRef} />
          <PasswordInput ref={passwordRef} />
          <Button variant="outlined" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  );
};

export default Login;
