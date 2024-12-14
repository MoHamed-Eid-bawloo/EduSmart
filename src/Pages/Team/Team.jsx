import React from 'react';
import '@mdi/font/css/materialdesignicons.min.css';
// import Zeyad from './assests/Team/Zeyad.jpg';


function Team() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white py-20">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  <p className="text-gray-700 text-lg font-light">
                    With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                {/* Member #1 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://scontent.fcai16-1.fna.fbcdn.net/v/t39.30808-6/370830342_1370119513585291_8126888959775251646_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHu2eiem9dJwKEAc5vSKMlyGuB4Y7BcQbwa4HhjsFxBvBqz3pjaLH1nh0gQ1p3hMovk4wjZKIeIRU4q1jR1hydk&_nc_ohc=jRYipLtGvmAQ7kNvgGHnWqq&_nc_zt=23&_nc_ht=scontent.fcai16-1.fna&_nc_gid=AVF4flMUX61mF2zclTriTZb&oh=00_AYCPNaMVi8M1hVwqCMk9rJqWqnu1KVzJYSKIYa4GDpjvpg&oe=676064D9"
                        alt="Zeyad m"
                      />

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Zeyad Mohammed</h1>
                      <div className="text-gray-700 font-light mb-2">Full_Stack DEV</div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member #2 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://scontent.fcai16-1.fna.fbcdn.net/v/t39.30808-6/460498037_996251762300680_2930950126289881491_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhOR45Yb_hEBJ3dLP3nPwV_S2rjZhmNof9LauNmGY2h7dzHyChOliRKlPr5k0C_KpPQTor6matt1tW12mVHP3V&_nc_ohc=jG_ru6FTOBYQ7kNvgHlj1yP&_nc_zt=23&_nc_ht=scontent.fcai16-1.fna&_nc_gid=ARzx2P27tY8J8CS5eGUDp-k&oh=00_AYBuGObu7jjKIwG3u00Wd0nHgeu-ke2BQ9ERiOco4z81ug&oe=67607D22"
                        alt="Mohamed eid"
                      />

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Mohammed Eid EL.Sayed</h1>
                      <div className="text-gray-700 font-light mb-2">Front_End DEV</div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Member #3 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        alt="Kenji Milton"
                      />
                    

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Basmala Ahmed</h1>
                      <div className="text-gray-700 font-light mb-2">Designer</div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member #5 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        alt="Doesn't matter"
                      />
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Israa Kazban</h1>
                      <div className="text-gray-700 font-light mb-2">Content Writer</div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member #4 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        alt="Doesn't matter"
                      />

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Yasmine Yasser</h1>
                      <div className="text-gray-700 font-light mb-2">Data Analysis</div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
