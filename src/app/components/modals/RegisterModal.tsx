"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModel";
import useRegisterModal from "@/app/hooks/useRegisterModel";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

export default function RegisterModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const loadingId = toast.loading("Signing your account...");
    axios
      .post("/api/register", data)
      .then((res) => {
        toast.success(res?.data?.message, { id: loadingId });
        registerModal.onClose();
      })
      .catch((error: any) => {
        toast.error(
          error?.response?.data?.error || "something went wrong, try again",
          { id: loadingId }
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <form className="flex flex-col gap-4" autoComplete="off">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </form>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr />
      <div className="flex items-center gap-3">
        <Button 
          label="Continue with Google"
          icon={FcGoogle}
          outline
          className="bg-[#edff50] border-none max-md:text-sm"
          onClick={() => {
            signIn("google");
          }}
        />
        <Button
          outline
          label="Continue with Github"
          icon={AiFillGithub}
          className="max-md:text-sm"
          onClick={() => {
            signIn("github");
          }}
        />
      </div>
      <div
        className="
          text-neutral-600 
          text-center 
          mt-4 
          font-[400]
        "
      >
        <p>
          Already have an account?
          <span
            onClick={toggle}
            className="
              text-neutral-800
              font-[500]
              cursor-pointer 
              hover:underline
            "
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register Page"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
