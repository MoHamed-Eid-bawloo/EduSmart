import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import * as yup from "yup";
import { Alert } from "@mui/material"; 
import { useContext } from "react";
import { MyContext } from "../../context/context";

export default function Login() {
  let {host,setIsLogin} = useContext(MyContext)
  const [errorMsg, setErrorMsg] = useState("");

  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        "صيغة البريد الإلكتروني غير صحيحة"
      )
      .required("البريد الإلكتروني مطلوب"),

    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص، وأن تكون لا تقل عن 8 أحرف"
      )
      .required("كلمة المرور مطلوبة"),
  });

  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${host}/auth/login`, values);
        if (response.data.message === "success") {
          localStorage.setItem("token", response.data.token);
          setIsLogin(true)    
          navigation("/success"); 
        }
      } catch (error) {
        if (error.status===401) {
          setErrorMsg("هذا الحساب غير موجود برجاء انشاء حساب")
        }
      }
    },
    
  });

  const inputClass = (fieldName) =>
    formik.errors[fieldName] && formik.touched[fieldName]
      ? "border border-danger"
      : "border border-neutral-300";

  return (
    <section dir="rtl">
      <div className="h-full">
        {/* <!-- عمود اليسار مع الصورة الخلفية --> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://img.freepik.com/premium-photo/illustration-woman-standing-front-computer-with-pen-generative-ai_902639-154530.jpg"
              className="w-full"
              alt="صورة توضيحية"
            />
          </div>
                    {/* Right Column */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            {/* Error Message Alert */}
            {errorMsg && (
              <Alert severity="success" color="error">{errorMsg}</Alert>
            )}
            <form onSubmit={formik.handleSubmit} className="px-5" dir="ltr">
            <div className="flex flex-row items-center justify-center lg:justify-end">
  <p style={{fontSize:"25px"}} className="mb-0 mr-4 text-lg text-gray-800 font-semibold hover:text-primary-700 transition-all duration-300">
    تسجيل دخول
  </p>
</div>


              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              </p>
              </div>

              {/* Email and Password */}
              <div>
                {formik.errors.email && formik.touched.email && (
                  <div className="text-danger text-sm">
                    {formik.errors.email}
                  </div>
                )}
                <TEInput
                  id="email"
                  name="email"
                  type="email"
                  label="البريد الإلكتروني"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mb-6 mt-2 w-full ${inputClass("email")}`}
                />
              </div>
              <div>
                {formik.errors.password && formik.touched.password && (
                  <div className="text-danger text-sm">
                    {formik.errors.password}
                  </div>
                )}
                <TEInput
                  id="password"
                  name="password"
                  type="password"
                  label="كلمة المرور"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mb-6 mt-2 w-full ${inputClass("password")}`}
                />
              </div>



              {/* Submit Button */}
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="block w-full rounded bg-primary-custom px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                >
                  تسجيل دخول
                </button>
              </TERipple>

              {/* Login Link */}
              <p className="mb-10 mt-2 pt-1 text-sm font-semibold text-right">
                ليس لديك حساب؟{" "}
                <Link
                  to="/register"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600"
                >
                  انشاء حساب
                </Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}




