import React, { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import useLoginPageVisible from "../../../Hook/useLoginPageVisible";

import lblood from "../../../assets/lblood.png";
import bl1 from "../../../assets/bl1.jpg";
import bl2 from "../../../assets/bl2.jpg";
import bl3 from "../../../assets/bl3.jpg";
import bl4 from "../../../assets/bl4.jpg";

import { IoClose } from "react-icons/io5";
import {
  MdOutlineDriveFileRenameOutline,
  MdAlternateEmail,
} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Login() {
  const { visible, setvisible } = useLoginPageVisible();
  const [ragister, setragister] = useState(false);

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleBlur,
    touched
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      cpassword: "",
      term_conditions: "",
      rememberme: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2).max(25).required("Name is required"),
      email: yup.string().email(),
      password: yup.string().min(6).required("Password is required"),
      cpassword: yup
        .string()
        .required("Confirm Password is required ")
        .oneOf([yup.ref("password")], "Password must match"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-bgdrk min-w-full min-h-[100vh] flex justify-center items-center">
      <div
        onClick={() => setvisible(false)}
        className="text-txtdrk text-[30px] text-right fixed top-[4px] right-[6px] z-[200] hover:cursor-pointer"
      >
        <IoClose />
      </div>
      <div className="min-w-full flex justify-center items-center">
        <div className="min-w-full center p-[5px] pt-[20px] sm:min-w-[50%]">
          <div className="min-w-full flex flex-col gap-[20px] rounded-md sm:min-w-[70%] sm:border-2 sm:border-solid sm:border-txtdrk lg:min-w-[80%]">
            <div className="min-w-full flex flex-row justify-between items-center">
              <img className="w-[120px] " src={lblood} />
              <img className="w-[120px] " src={lblood} />
              {/* <p className='text-[20px] text-txtdrk'>Blood ABC</p> */}
            </div>

            {/* form */}
            <div className="min-w-full flex flex-col justify-center items-center gap-[10px]">
              <div className="min-w-[80%] text-txtdrk flex justify-around items-center">
                <p
                  onClick={() => setragister(true)}
                  className={`${
                    ragister ? "border-b-2" : ""
                  } border-solid border-txtdrk px-[8px] hover:cursor-pointer hover:text-[red] duration-300`}
                >
                  Ragister
                </p>
                <p
                  onClick={() => setragister(false)}
                  className={`${
                    ragister ? "" : "border-b-2"
                  } border-solid border-txtdrk px-[8px] hover:cursor-pointer hover:text-[red] duration-300`}
                >
                  Login
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="min-w-full py-[10px] flex flex-col justify-center items-center gap-[10px]"
              >
                {ragister ? (
                  <div className="min-w-[90%] border-b-2 border-solid border-txtdrk flex flex-wrap justify-center items-center gap-[3px]">
                    <MdOutlineDriveFileRenameOutline className="text-[20px] text-txtdrk border-r-2 border-solid border-txtdrk pr-[3px]" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="min-w-[90%] text-[#fff] bg-txtnrl pl-[5px] border-none outline-none"
                    />
                    <span className='text-[red] text-[12px]'>{touched.name && errors.name? errors.name:""}</span>
                  </div>
                ) : (
                  ""
                )}

                <div className="min-w-[90%] border-b-2 border-solid border-txtdrk flex flex-wrap justify-center items-center gap-[3px]">
                  <MdAlternateEmail className="text-[20px] text-txtdrk border-r-2 border-solid border-txtdrk pr-[3px]" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="min-w-[90%] text-[#fff] bg-txtnrl pl-[5px] border-none outline-none"
                  />
                  <span className='text-[red] text-[12px]'>{touched.email && errors.email? errors.email:""}</span>
                </div>

                <div className="min-w-[90%] border-b-2 border-solid border-txtdrk flex flex-wrap justify-center items-center gap-[3px]">
                  <FaPhoneAlt className="text-[20px] text-txtdrk border-r-2 border-solid border-txtdrk pr-[3px]" />
                  <input
                    type="number"
                    name="number"
                    placeholder="Number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="min-w-[90%] text-[#fff] bg-txtnrl pl-[5px] border-none outline-none"
                  />
                 <span className='text-[red] text-[12px]'>{touched.number && errors.number? errors.number:""}</span>
                </div>

                <div className="min-w-[90%] border-b-2 border-solid border-txtdrk flex flex-wrap justify-center items-center gap-[3px]">
                  <TbPasswordUser className="text-[20px] text-txtdrk border-r-2 border-solid border-txtdrk pr-[3px]" />
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="min-w-[90%] text-[#fff] bg-txtnrl pl-[5px] border-none outline-none"
                  />
                  <span className='text-[red] text-[12px]'>{touched.password && errors.password? errors.password:""}</span>
                </div>
                {ragister ? (
                  <div className="min-w-[90%] border-b-2 border-solid border-txtdrk flex flex-wrap justify-center items-center gap-[3px]">
                    <TbPasswordUser className="text-[20px] text-txtdrk border-r-2 border-solid border-txtdrk pr-[3px]" />
                    <input
                      type="text"
                      name="cpassword"
                      placeholder="Confirm Password"
                      value={values.cpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="min-w-[90%] text-[#fff] bg-txtnrl pl-[5px] border-none outline-none"
                    />
                    <span className='text-[red] text-[12px]'>{touched.cpassword && errors.cpassword? errors.cpassword:""}</span>
                  </div>
                ) : (
                  ""
                )}
                {ragister ? (
                  <div className="text-txtdrk text-[12px] center gap-[5px]">
                    <input
                      type="checkbox"
                      name="term_conditions"
                      value={values.term_conditions}
                      onChange={handleChange}
                    />{" "}
                    I accept The{" "}
                    <Link to="/" className="text-[#3775FD]">
                      Terms & Conditions
                    </Link>{" "}
                  </div>
                ) : (
                  <div className="flex justify-between min-w-[90%]">
                    <div className="text-txtdrk text-[15px] gap-[5px] flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="rememberme"
                        value={values.rememberme}
                        onChange={handleChange}
                      />{" "}
                      Remember me{" "}
                    </div>
                    <Link
                      to="/"
                      className="text-[#3775FD] text-[12px] underline"
                    >
                      Forget Password
                    </Link>
                  </div>
                )}
                <button
                  type="submit"
                  className="text-txtnrl text-[20px] w-[90%] bg-bgnrl p-[3px] border-solid border-txtdrk hover:border-2 hover:bg-bgdrk hover:text-txtdrk duration-300"
                >
                  {ragister ? "Register" : "Sign In"}
                </button>
              </form>
              {ragister ? (
                <p
                  onClick={() => setragister(false)}
                  className="text-[#3775Fd] underline hover:cursor-pointer"
                >
                  Already have an Acount
                </p>
              ) : (
                <p
                  onClick={() => setragister(true)}
                  className="text-[#3775Fd] underline hover:cursor-pointer"
                >
                  Ragister Now
                </p>
              )}
            </div>
            {/* form */}
          </div>
        </div>

        {/* images */}
        <div className="hidden min-h-[120vh] min-w-[50%] relative z-[100] lg:inline-block">
          <img
            className="w-[53%] h-[42%] absolute top-[0%] right-[30%]"
            src={bl3}
          />
          <img
            className="w-[50%] absolute top-[33%] right-[0%] z-10"
            src={bl1}
          />
          <img className="h-[33%] absolute top-[38%] right-[37%]" src={bl2} />
          <img
            className="w-[46%] absolute top-[62%] right-[18%] z-10"
            src={bl4}
          />
        </div>
      </div>
    </div>
  );
}
