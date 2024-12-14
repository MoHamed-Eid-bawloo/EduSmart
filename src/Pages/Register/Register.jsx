import React from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple, TESelect } from "tw-elements-react";

export default function Register() {
  const data_Select = [
    { text: "ذكر", value: "Male" },
    { text: "أنثى", value: "Female" },
  ];
  const data_Rule = [
    { text: "طالب", value: "sutdent" },
    { text: "ولي امر", value: "Parent" },
    { text: "مدرس", value: "teacher" },
    { text: "مدير", value: "admin" }
  ];
  return (
    <section dir="rtl">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="صورة توضيحية"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form className="px-5">
              {/* <!--Sign in section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">سجل معنا</p>
              </div>

              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                </p>
              </div>

              <form dir="ltr">
                <div className="grid grid-cols-2 gap-4">
                  {/* <!--First name input--> */}
                  <TEInput
                    type="text"
                    label="الاسم الأول"
                    className="mb-6"
                  ></TEInput>

                  {/* <!--Last name input--> */}
                  <TEInput 
                    type="text"
                    label="الاسم الأخير"
                    className="mb-6"
                  ></TEInput>
                </div>

                {/* <!--Email input--> */}
                <TEInput
                  type="email"
                  label="البريد الإلكتروني"
                  className="mb-6"
                ></TEInput>

                {/* <!--Password input--> */}
                <TEInput
                  type="password"
                  label="كلمة المرور"
                  className="mb-6"
                ></TEInput>

                <TEInput
                  type="text"
                  label="رقم الهاتف"
                  className="mb-6"
                ></TEInput>

<TESelect data={data_Select} label="الجنس" className="mb-6" />
<TESelect data={data_Rule} label="نوع الحساب" className="mb-6" />

                {/* <!--Submit button--> */}
                <TERipple rippleColor="light" className="w-full">
                  <button
                    type="button"
                    className="block w-full rounded bg-primary-custom px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
                  >
                    إنشاء حساب
                  </button>
                </TERipple>

                {/* <!-- Register link --> */}
                <p className="mb-10 mt-2 pt-1 text-sm font-semibold" style={{textAlign:"right"}}>
                  لديك حساب بالفعل؟ {" "}
                  <Link
                    to="/login"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    تسجيل الدخول
                  </Link>
                </p>
              </form>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
