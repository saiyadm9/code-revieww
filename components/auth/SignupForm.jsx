"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/account/myProfile/PasswordInput";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import InputField from "@/components/ui/InputField";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter()
  const [error, setError] = useState("");
  const {register, formState: { errors }, handleSubmit} = useForm();

  const handleSignup = async (data) => {
    try {
      setError("");
      console.log(data);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col mb-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
            <Icon
              icon="solar:football-bold"
              width={23}
            />
          </div>

          <span className="text-xl font-bold tracking-tight text-foreground">
            Sports<span className="text-primary">API</span>
          </span>
        </Link>

        <h2 className="mt-4 text-2xl text-foreground font-bold mb-1">
          Create an account
        </h2>

        <p className="text-sm text-muted">
          To get started with your sports API account
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleSignup)}
        className="space-y-4"
      >
        <div>
          <InputField
            className="border-2 bg-surface"
            placeholder="Full Name"
            {...register("name", {
              required: "Full name is required",
            })}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <InputField
            type="email"
            className="border-2 bg-surface"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        
        <div>
          <PasswordInput
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <PasswordInput
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <ButtonPrimary
          type="submit"
          className="w-full py-3 rounded font-semibold"
        >
          Signup
        </ButtonPrimary>
      </form>

      {error && (
        <div className="text-red-500 mt-4">
          {error}
        </div>
      )}

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}

        <Link
          href="/login"
          className="text-primary/90 font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

