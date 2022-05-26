import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    return (
        <div className="flex flex-col justify-center absolute min-h-screen w-full p-4 bg-primary">
            <div className="flex items-start mx-auto">
                <img  className="h-60" src={logo} alt="logo_img" />
            </div>
            <h1 className="text-white text-2xl text-center sm:text-4xl -mt-8 mb-4">Login to View</h1>
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
            <button className="flex justify-center w-72 bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-1xl rounded-full sm:w-144" id="login_btn">LOGIN</button>
            <h5 className="p-4 text-gray-400 text-center">OR</h5>
            <button className="flex justify-center w-64 bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-1xl rounded-full" id="register_btn">REGISTER</button>
        </div>
    )
}