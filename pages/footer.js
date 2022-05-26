import logo from "./assets/footer-logo.svg"

export default function Footer() {
    
    return (
        <div className="bg-dark-self">
            <div className="relative">
                <div className="w-full flex justify-center mx-auto pt-16">
                    <img className="h-10.85" src={logo} alt="logo_img" />
                </div>
                <div className="text-center text-white">
                    <p>Hey Travel Inc</p>
                    <p>hey@heytravel.com</p>
                    <p>+49 800 000000</p>
                    <a className="no-underline text-indigo-400 cursor-pointer">Show on map</a>
                </div>
                <div className="flex justify-center py-20">
                    <span className="text-indigo-500 text-2xl">
                        <i class="fab fa-facebook-square"></i>
                    </span>
                    <span className="text-indigo-500 text-2xl pl-6">
                        <i class="fab fa-twitter"></i>
                    </span>
                    <span className="text-indigo-500 text-2xl pl-6">
                        <i class="fab fa-instagram"></i>
                    </span>
                </div>
            </div>
            <div className="p-6 border-gray-400 border-t">
                <div className="flex flex-col relative mm:text-center sm:flex-row">
                    <div className="flex flex-col items-start mm:space-y-4 sm:space-x-24 sm:flex-row">
                        <a className="text-white mm:w-full" href="#">Investor Portal</a> 
                        <a className="text-white mm:w-full" href="#">Beta Partner</a> 
                        <a className="text-white mm:w-full" href="#">Knowledge Center</a>
                        <a className="text-white mm:w-full" href="#">About</a>
                    </div>
                    <h3 className="text-white font-bold mm:mt-3 mm:pt-2 mm:border-t sm:absolute sm:right-3">@2021 Hey Travel, Inc</h3> 
                </div>
            </div>
        </div>
    )
}