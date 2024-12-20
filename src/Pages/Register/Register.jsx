import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple, TESelect } from "tw-elements-react";
import * as yup from "yup";
import { Alert } from "@mui/material"; // استيراد Alert من Material UI
import { MyContext } from "../../context/context";

export default function Register() {
  const {host} = useContext(MyContext);
  const data_Select = [
    { text: "ذكر", value: "male" },
    { text: "أنثى", value: "female" },
  ];
  const data_Rule = [
    { text: "طالب", value: "student" },
    { text: "ولي امر", value: "Parent" },
    { text: "مدرس", value: "teacher" },
    { text: "مدير", value: "admin" },
  ];

  const [errorMsg, setErrorMsg] = useState("");

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .matches(
        /^[A-Za-zأ-ي\s]{2,15}$/, // يسمح بالأحرف الإنجليزية والعربية
        "الاسم الأول يجب أن يحتوي على أحرف عربية أو إنجليزية فقط ويكون بين 2 و 15 حرفًا"
      )
      .required("الاسم الأول مطلوب"),

    lastName: yup
      .string()
      .matches(
        /^[A-Za-zأ-ي\s]{2,15}$/, // يسمح بالأحرف الإنجليزية والعربية
        "اسم العائلة يجب أن يحتوي على أحرف عربية أو إنجليزية فقط ويكون بين 2 و 15 حرفًا"
      )
      .required("اسم العائلة مطلوب"),

    email: yup
      .string()
      .matches(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        "صيغة البريد الإلكتروني غير صحيحة"
      )
      .required("البريد الإلكتروني مطلوب"),

    password: yup
      .string()
      .required("كلمة المرور مطلوبة"),

    phone: yup
      .string()
      .matches(
        /^\+?01[0125][0-9]{8}$/,
        "رقم الهاتف يجب أن يكون رقمًا مصريًا صالحًا"
      )
      .required("رقم الهاتف مطلوب"),
  });

  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      gender: "male", // Default value
      role: "student", // Default value
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${host}/auth/register`, values);
        if (response.data.message === "success") {
          navigation("/login");
        }
        console.log(response);
      } catch (error) {
        setErrorMsg("هذا الايميل مستخدم بالفعل. رجاء استخدام ايميل اخر.");
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
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left Column */}
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
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
              سجل معنا</p>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              </p>
              </div>

              {/* First and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {formik.errors.firstName && formik.touched.firstName && (
                    <div className="text-danger text-sm">
                      {formik.errors.firstName}
                    </div>
                  )}
                  <TEInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="الاسم الأول"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mb-6 mt-2 w-full ${inputClass("firstName")}`}
                  />
                </div>
                <div>
                  {formik.errors.lastName && formik.touched.lastName && (
                    <div className="text-danger text-sm">
                      {formik.errors.lastName}
                    </div>
                  )}
                  <TEInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="الاسم الأخير"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mb-6 mt-2 w-full ${inputClass("lastName")}`}
                  />
                </div>
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

              {/* Phone Number */}
              <div>
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-danger text-sm">
                    {formik.errors.phone}
                  </div>
                )}
                <TEInput
                  id="phone"
                  name="phone"
                  type="text"
                  label="رقم الهاتف"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mb-6 mt-2 w-full ${inputClass("phone")}`}
                />
              </div>

              {/* Gender and Role Selection */}
              <div>
                <TESelect
                  id="gender"
                  name="gender"
                  data={data_Select}
                  label="الجنس"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  className="mb-6 w-full"
                />
              </div>
              <div>
                <TESelect
                  id="role"
                  name="role"
                  data={data_Rule}
                  label="نوع الحساب"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  className="mb-6 w-full"
                />
              </div>

              {/* Submit Button */}
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="block w-full rounded bg-primary-custom px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                >
                  إنشاء حساب
                </button>
              </TERipple>

              {/* Login Link */}
              <p className="mb-10 mt-2 pt-1 text-sm font-semibold text-right">
                لديك حساب بالفعل؟{" "}
                <Link
                  to="/login"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600"
                >
                  تسجيل الدخول
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
