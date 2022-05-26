import logo from "../assets/logo-min.svg"

export default function Header() {
    
    return (
        <div className="flex flex-col justify-center relative my-5 sm:flex-row sm:justify-start">
            <img src={logo} className="h-24 sm:h-16" />
            <div className="flex justify-center">
                <button id="btn_login" className="w-28 h-9 bg-indigo-300 my-4 text-white text-base rounded-full top-4 right-8 sm:absolute sm:my-0 sm:text-xl">Login</button>
            </div>
        </div>
    )
}