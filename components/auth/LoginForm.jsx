"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import PasswordInput from "@/components/account/myProfile/PasswordInput";
import InputField from "@/components/ui/InputField";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState("");
  const {register, formState: { errors }, handleSubmit} = useForm();

  const handleLogin = async (data) => {
    try {
      setError("");
      console.log(data);

      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError("");

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
          Welcome Back!
        </h2>

        <p className="text-sm text-muted">
          Please enter your credentials to login
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-4"
      >
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

        <ButtonPrimary
          type="submit"
          className="w-full py-3 rounded gradient-button font-semibold"
        >
          Login
        </ButtonPrimary>

        <Button
          type="submit"
          onClick={handleGoogleLogin}
          className="w-full cursor-pointer flex items-center font-semibold justify-center gap-4 py-3"
        >
          <Icon
            icon="material-icon-theme:google"
            width={20}
          />
          <span>Sign In with Google</span>
        </Button>
      </form>

      {error && (
        <p className="text-danger mt-4">
          {error}
        </p>
      )}

      <p className="mt-6 text-center text-sm text-muted">
        Don't have an account?{" "}

        <Link
          href="/signup"
          className="text-primary/90 font-semibold"
        >
          Signup
        </Link>
      </p>
    </div>
  );
}

