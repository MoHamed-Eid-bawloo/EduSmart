import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogin, setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Set isLogin to false
    setIsLogin(false);
    // Redirect to login page
    navigate("/login");
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="شعار EduSmart"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              EduSmart
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLogin ? (
              // Show logout button if the user is logged in
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              >
                تسجيل الخروج
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  انشاء حساب
                </Link>
              </>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  الفريق
                </Link>
              </li>
              <li>
                <Link
                  to="aboutUs"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  المميزات
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  الرئيسية
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MyContext } from "../../context/context";
// import Logout from '@mui/icons-material/Logout';
// import { Account } from '@toolpad/core/Account';
// import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';

// export default function Header() {
//   const { isLogin, setIsLogin } = useContext(MyContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
  
//   // Toggle menu for mobile
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Demo session data
//   const demoSession = {
//     user: {
//       name: 'Bharat Kashyap',
//       email: 'bharatkashyap@outlook.com',
//       image: 'https://avatars.githubusercontent.com/u/19550456',
//     },
//   };

//   // Session and authentication management
//   const [session, setSession] = React.useState(demoSession);

//   const authentication = React.useMemo(() => {
//     return {
//       signIn: () => {
//         setSession(demoSession); // Simulating sign-in
//       },
//       signOut: () => {
//         localStorage.removeItem("token");
//         setIsLogin(false);  // Set login status to false
//         setSession(null);  // Clear session
//         navigate("/login"); // Redirect to login page
//       },
//     };
//   }, [setIsLogin, navigate]);

//   return (
//     <header>
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center">
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="mr-3 h-6 sm:h-9"
//               alt="شعار EduSmart"
//             />
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               EduSmart
//             </span>
//           </Link>

//           {/* Right Side Actions */}
//           <div className="flex items-center lg:order-2">
//             {isLogin ?(
//               <AuthenticationContext.Provider value={authentication}>
//                 <SessionContext.Provider value={session}>
//                   <Account
//                     slotProps={{
//                       signOutButton: {
//                         color: "error",
//                         startIcon: <Logout />,
//                       },
//                       preview: {
//                         variant: "expanded",
//                         slotProps: {
//                           avatarIconButton: {
//                             sx: { width: "fit-content", margin: "auto" },
//                           },
//                           avatar: { variant: "rounded" },
//                         },
//                       },
//                     }}
//                   />
//                 </SessionContext.Provider>
//               </AuthenticationContext.Provider>
//             ) : (
//               <div className="flex">
//                 <Link
//                   to="/login"
//                   className="text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//                 >
//                   تسجيل الدخول
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
//                 >
//                   انشاء حساب
//                 </Link>
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="mobile-menu-2"
//               aria-expanded={isMenuOpen}
//             >
//               <span className="sr-only">فتح القائمة الرئيسية</span>
//               {isMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <Link
//                   to="/contact"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   تواصل معنا
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/team"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   الفريق
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/aboutUs"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   المميزات
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/"
//                   className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
//                   aria-current="page"
//                 >
//                   الرئيسية
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
