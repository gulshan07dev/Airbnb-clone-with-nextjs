"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModel";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

export default function RegisterModal() {
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
        console.log(res);

        toast.success(res?.data?.message, { id: loadingId });
        registerModal.onClose();
      })
      .catch((error: any) => {
        toast.error(
          error?.response?.data?.message || "something went wrong, try again",
          { id: loadingId }
        );
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle} 
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub} 
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Already have an account?
          <span 
            className="
              text-neutral-800
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
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
