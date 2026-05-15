"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto my-10 md:my-5 px-2 md:px-0">
      {" "}
      <Form className="flex flex-col w-full md:w-110 p-5 rounded-2xl bg-black/5 mx-auto gap-4 border border-slate-300 justify-center shadow-xl">
        <h2 className="font-bold text-center text-2xl">Login your account</h2>
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email address</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              placeholder="Enter your email address"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          className="w-full rounded-full"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              placeholder="Enter your password"
              className="w-full rounded-full"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-2 w-full text-center">
          <button
            type="submit"
            className="w-full btn btn-primary rounded-full h-9"
          >
            <Check />
            Login
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center">
          <div className="grow h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-500 font-medium">
            OR CONTINUE WITH
          </span>
          <div className="grow h-px bg-gray-200"></div>
        </div>
        {/* Google Button */}
        <button className="w-full flex items-center gap-2 btn btn-primary btn-dash rounded-full h-9">
          <FcGoogle size={20} />
          Continue with Google
        </button>
        <span className="font-medium mx-auto mt-2">
          Dont’t Have An Account ?{" "}
          <Link href="/auth/register">
            <span className="text-red-600">Register</span>
          </Link>
        </span>
      </Form>
    </div>
  );
}
