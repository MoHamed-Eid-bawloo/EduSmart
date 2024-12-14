import React from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

export default function Login() {
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

          {/* <!-- عمود اليمين --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form className="px-5">
              {/* <!-- قسم تسجيل الدخول --> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">تسجيل الدخول</p>
              </div>

              {/* <!-- فاصل بين تسجيل الدخول عبر وسائل التواصل والبريد الإلكتروني/كلمة المرور --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  
                </p>
              </div>
<form dir="ltr">

              {/* <!-- إدخال البريد الإلكتروني --> */}
              <TEInput
                type="email"
                label="البريد الإلكتروني"
                size="lg"
                className="mb-6"
                ></TEInput>

              {/* <!-- إدخال كلمة المرور --> */}
              <TEInput
                type="password"
                label="كلمة المرور"
                className="mb-6"
                size="lg"
                ></TEInput>

              <div className="mb-6 flex items-center justify-between">
           

                {/* <!-- رابط نسيت كلمة المرور --> */}
                <Link to="/forgetPass">نسيت كلمة المرور؟</Link>
              </div>

              {/* <!-- زر تسجيل الدخول --> */}
              <div className="text-center lg:text-left">
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-custom px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none"
                    >
                    تسجيل الدخول
                  </button>
                </TERipple>

                {/* <!-- رابط التسجيل --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold" style={{textAlign:"right"}}>
                  ليس لديك حساب؟ {" "}
                  <Link
                    to="/register"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600"
                    >
                    تسجيل
                  </Link>
                </p>
              </div>
                    </form>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
