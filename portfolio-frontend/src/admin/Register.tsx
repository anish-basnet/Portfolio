import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormValues, RegisterPageProps } from "../type/global";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

export const Register = (props: RegisterPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const passwordVisibleHandle = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="primary-bg-color primary-text-color font-anona">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col my-2">
          <div>
            <label className="block py-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="border-2 hover:border-black text-black rounded-md py-1 w-full"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Email format invalid",
                },
              })}
            />
          </div>
          <div>
            {errors.email && (
              <div className="text-red-600">
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden my-2">
          <div className="relative">
            <label className="block font-anona py-2" htmlFor="password">
              Password
            </label>
            <input
              type={(passwordVisible)?"text":"password"}
              className="border-2 hover:border-black text-black rounded-md py-1 w-full"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: {
                  value:6,
                  message:
                    "Minlength of password is 6",
                },
              })}
            />
            {(!passwordVisible)?<span onClick={passwordVisibleHandle} className="absolute cursor-pointer right-2 bottom-2 secondary-text-color">
              <MdOutlineVisibility />
            </span>:<span onClick={passwordVisibleHandle} className="absolute cursor-pointer right-2 bottom-2 secondary-text-color">
              <MdOutlineVisibilityOff />
            </span>}
          </div>
          <div>
            {errors.password && (
              <div className="text-red-600">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>
        <button
          className="border-2 w-full rounded-md my-4 py-1 hover:secondary-bg-color hover:secondary-text-color"
          type="submit"
        >
          {props.isLoginPage ? 'Login': 'Sign Up'}
        </button>
      </form>
      {props.isLoginPage ? (
              <div className="flex gap-3">
              <p>Don't have an Account?</p><Link className="text-blue-500" to="/signup">Sign Up</Link>
            </div>
      ): (
        <div className="flex gap-3">
        <p>Already has an Account?</p><Link className="text-blue-500" to="/login">Login</Link>
      </div>
      )}

    </div>
  );
};
