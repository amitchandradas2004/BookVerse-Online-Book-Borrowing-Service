"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleLoginFunction = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
      return;
    }
    if (res) {
      alert("login success");
    }
  };

  // Framer Motion Variants
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, // Staggers the appearance of each field
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto mt-22.5 px-2 md:px-0 flex justify-center">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-110"
      >
        <Form
          className="flex flex-col w-full p-5 rounded-2xl bg-black/5 gap-4 border border-slate-300 justify-center shadow-xl"
          onSubmit={handleSubmit(handleLoginFunction)}
        >
          <motion.h2 variants={itemVariants} className="font-bold text-center text-2xl">
            Login your account
          </motion.h2>

          <motion.div variants={itemVariants} className="w-full">
            <TextField
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
                  {...register("email", { required: true })}
                  placeholder="Enter your email address"
                  className="rounded-full w-full"
                />
              </InputGroup>
              <FieldError />
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <TextField
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
                  {...register("password", { required: true })}
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
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-2 w-full text-center">
            <button
              type="submit"
              className="w-full btn btn-primary rounded-full h-9 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5"
            >
              <Check />
              Login
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center">
            <div className="grow h-px bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-500 font-medium">
              OR CONTINUE WITH
            </span>
            <div className="grow h-px bg-gray-200"></div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 btn btn-primary btn-dash rounded-full h-9 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5"
          >
            <FcGoogle size={20} />
            Continue with Google
          </motion.button>

          <motion.span variants={itemVariants} className="font-medium mx-auto mt-2">
            Don’t Have An Account?{" "}
            <Link href="/register">
              <span className="text-red-600">Register</span>
            </Link>
          </motion.span>
        </Form>
      </motion.div>
    </div>
  );
}