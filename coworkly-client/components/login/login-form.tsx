"use client";

import Image from "next/image";
import heroImage from "@/public/webp/heroImage.webp";
import { AppInputField } from "../ui/appInputField";
import { Button } from "../ui/button";
import { Formik, Form } from "formik";
import logo from "@/public/logo.png";
import Link from "next/link";

export function LoginForm() {
  const handleSubmit = () => {
    console.log("submit");
  };

  const InitialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="max-w-[900px] w-full shadow-md bg-white backdrop-blur-md h-[600px] rounded-2xl">
      <div className="p-8 flex items-start gap-10 h-full">
        <div className="basis-[50%] h-full">
          <div className="flex items-center cursor-pointer mb-5">
            <Image src={logo} alt="Logo" width={30} height={30} />
            <span className="text-xl font-semibold text-gray-950">oworkly</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium">Welcome Back</h2>
            <p className=" mt-2 text-sm text-gray-500">
              Enter Your Account Credentials
            </p>
          </div>
          <Formik
            enableReinitialize
            validationSchema={""}
            initialValues={InitialValues}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-4 mt-7">
                <AppInputField
                  name="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  type="email"
                  labelClassName="text-base"
                  className="text-black"
                />
                <AppInputField
                  name="password"
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  labelClassName="text-base"
                  className="text-black"
                />
                <span className="self-end-safe">
                  <Link
                    href={"#"}
                    className="text-sm underline hover:text-orange-500"
                  >
                    Forget Password
                  </Link>
                </span>

                <Button className="mt-3">Sign In</Button>
              </Form>
            )}
          </Formik>

          <div className="border-t border-gray-200 my-7"></div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Dont have an Account ?{" "}
              <Link
                href={""}
                className="font-bold text-black hover:underline hover:text-orange-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="basis-[50%] w-full h-full">
          <Image
            src={heroImage}
            alt="Login Image"
            width={500}
            height={1000}
            className="object-cover w-full h-full rounded-2xl shadow-lg shadow-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
