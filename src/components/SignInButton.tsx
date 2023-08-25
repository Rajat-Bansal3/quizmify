"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { error } from "console";

type Props = {
  text: string;
};
const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
