import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'

import intro from '../assets/intro.svg'
import phone1SVG from '../assets/slider-phone-1.svg'
import phone2SVG from '../assets/slider-phone-2.svg'
import phone3SVG from '../assets/slider-phone-3.svg'
import airportParking from '../assets/home-airportparking.oneline-mobile.svg'

export default function OpenerAndSlider() {

    return (
        <div className="space-y-6 flex flex-col overflow-hidden">
            <div className="h-900-P2R flex flex-col-reverse md:flex-row">
                <div className="w-full h-1/2 md:w-31% md:h-full"></div>
                <div className="overflow-hidden w-full h-auto md:w-69% md:h-full">
                    <div className="md:w-312">
                        <img src={intro}></img>
                    </div>
                </div>
                <div className="absolute top-3/8 left-48 flex flex-col justify-center space-y-10">                            
                    <h1 className="max-w-md text-3xl font-bold text-primary sm:text-7xl">Travel & Airport Parking<br></br>Tech</h1>
                    <p className="max-w-2xl pr-0 text-base text-gray-600 sm:text-xl xl:text-3xl lg:pr-20">Hey Travel helps airports connect their travelers to their parking spots.</p>
                    <div className="w-full text-center w-max">
                        <a href="#" className="inline-block rounded-full bg-indigo-400 w-auto px-8 py-2 text-white text-2xl">Start now</a>
                    </div>
                </div>
            </div>

            <div className="h-900-P2R flex relative">
                <div className="w-1/2 py-36 px-20">
                    <img src={phone1SVG}></img>
                </div>
                <h1 className="absolute top-1/3 left-1/7 text-right max-w-md text-3xl font-bold text-primary sm:text-8xl">EXPERIENCE THE FULL POTENTIAL.</h1>
                <div className="w-1/2 bg-indigo-100"></div>
            </div>

            <div className="h-900-P2R flex relative">
                <div className="w-1/2 bg-indigo-100"></div>
                <div className="w-1/2">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-60">
                        <h1 className="text-gray-800 text-6xl font-bold">Welcome to Luxo.</h1>
                        <p className="text-gray-800 text-2xl max-w-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <div className="w-full text-center w-max">
                            <a href="#" className="inline-block rounded-full bg-indigo-400 w-auto px-8 py-2 text-white text-2xl">Start now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-900-P2R flex flex-col overflow-hidden">
                <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 mt-60 mb-12">
                    <h1 className="text-gray-800 max-w-2xl text-6xl font-bold">Experience the full potential of Luxo.</h1>
                    <div className="w-full text-center">
                        <a href="#" className="inline-block border-indigo-400 rounded-full w-auto px-16 py-4 border text-indigo-400 text-3xl">Call to Action</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={phone2SVG}></img>
                </div>
            </div>

            <div className="h-900-P2R flex py-24">
                <div className="w-40 h-full flex flex-col justify-center">
                    <h1 className="text-indigo-300 font-black tracking-widest -rotate-90">Topic Slider</h1>
                </div>
                <div className="w-full bg-indigo-100 h-full">
                </div>
                <div className="w-40 h-full flex flex-col justify-center">
                    <div className="space-y-6 h-auto w-full pl-12">
                        <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                        <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                        <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                        <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-900-P2R bg-indigo-100">
                <div className="z-0 w-full h-full overflow-hidden">
                    <img src={airportParking} className="mt-16 -ml-88"></img>
                </div>
                <div className="z-10 absolute right-20 bottom-36 bg-white px-8 py-16">
                    <div className="flex flex-col text-center items-center jusity-center space-y-8">
                        <h1 className="max-w-xl text-gray-800 text-6xl font-bold">EXPERIENCE THE FULL POTENTIAL.</h1>
                        <p className="text-gray-800 text-4xl max-w-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block border-indigo-400 rounded-full w-auto px-16 py-4 border text-indigo-400 text-3xl">Call to Action</a>
                        </div>
                    </div>
                </div>
                <div className="z-10 flex flex-row justify-between w-full absolute top-1/2 px-2">
                    <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10094;</a>
                    <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10095;</a>
                </div>
            </div>

            <div className="w-full h-900-P2R relative">
                <div className="flex flex-col justify-center w-full h-full p-4 bg-indigo-100">
                    <div className="flex items-start mx-auto mb-12">
                        <h1 className="max-w-2xl text-gray-800 text-center text-6xl">Experience the full potential of prototyping.</h1>
                    </div>
                    <div className="flex flex-col items-start mx-auto p-4 space-y-4 sm:space-y-0 sm:space-x-2 sm:flex-row">
                        <div className="flex items-start relative">    
                            <input className="w-72 p-3 focus:outline-none focus:ring-2 rounded" id="username" placeholder="Your Username" />
                            <FontAwesomeIcon className="absolute top-1/2 transform translate-x-64 -translate-y-1/2 text-gray-400" icon={faUser} />
                        </div>
                        <div className="flex items-start relative">
                            <input className="w-72 p-3 focus:outline-none focus:ring-2 rounded" id="password" placeholder="Your Password" />
                            <FontAwesomeIcon className="absolute top-1/2 transform translate-x-64 -translate-y-1/2 text-gray-400" icon={faUserLock} />
                        </div>
                    </div>
                    <button className="flex justify-center w-72 bg-indigo-400 hover:bg-indigo-400 p-3 mx-auto text-white text-1xl rounded-full sm:w-144" id="login_btn">Register now</button>
                    <h5 className="p-4 text-gray-400 text-center">or use</h5>
                    <button className="flex justify-center w-72 bg-indigo-400 hover:bg-indigo-400 p-3 mx-auto text-white text-1xl rounded-full" id="register_btn">
                        <span className="absolute transform -translate-y-1 -translate-x-26 text-white text-2xl pl-6">
                            <i className="fab fa-facebook-square"></i>
                        </span>Login with Facebook
                    </button>
                </div>
                
                <div className="absolute top-1/2 transform translate-x-16 -translate-y-1/2 right-0">
                    <img src={phone1SVG}></img>
                </div>
            </div>

            <div className="h-900-P2R flex py-28">
                <div className="flex justify-center w-57% h-full">
                    <div className="flex flex-col justify-center space-y-8 w-max">
                        <h1 className="text-gray-800 text-7xl">Experience the full<br></br>potential of Luxo.</h1>
                        <p className="text-gray-800 text-md max-w-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        <div className="flex items-center space-x-3">
                            <a href='#' className="text-blue-self font-bold">Download our app</a>
                            <a href='#'><div className="bg-blue-self flex items-center pr-3 py-1 rounded-lg cursor-pointer">
                                <div className="px-3">
                                    <span className="text-white text-4xl">
                                        <i className="fab fa-apple"></i>
                                    </span>
                                </div>
                                <div className="flex flex-col items-start text-white">
                                    <h1 className="text-xs">Download on the</h1>
                                    <h1 className="text-xl -mt-2">App Store</h1>
                                </div>
                            </div></a>
                            <a href='#'><div className="bg-blue-self flex pr-3 py-1.5 rounded-lg cursor-pointer">
                                <div className="pl-3 pr-1">
                                    <span className="text-white text-2xl text-indigo-100">
                                        <i className="fab fa-google-play"></i>
                                    </span>
                                </div>
                                <div className="flex flex-col items-start text-white">
                                    <h1 className="text-xs">GET IT ON</h1>
                                    <h1 className="text-xl -mt-2">Google Play</h1>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div className="-mr-60">
                    <img src={phone3SVG}></img>
                </div>
            </div>

            <div className="relative h-900-P2R flex justify-end">
                <div className="w-90% h-full bg-indigo-100"></div>
                <div className="flex absolute left-0 w-70% h-89% bg-blue-self pt-24">
                    <div className="flex justify-center w-70%">
                        <div className="flex flex-col justify-center w-max space-y-10">
                            <h1 className="text-gray-100 text-6xl max-w-md">Experience the full potential of prototyping.</h1>
                            <p className="text-gray-100 text-lg max-w-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <div className="w-full text-center w-max">
                                <a href="#" className="inline-block rounded-full border border-white w-auto px-8 py-2 text-white text-xl">Start now</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-30% h-full flex flex-col justify-center">
                        <div className="space-y-6 h-auto w-full pl-60">
                            <div className="bg-white rounded-full w-2 h-2"></div>
                            <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                            <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                            <div className="bg-indigo-400 rounded-full w-2 h-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}