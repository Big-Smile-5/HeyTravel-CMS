import Footer from '../footer'

import logo from '../assets/logo-min.svg'
import intro from '../assets/intro.svg'
import bookingMobile from '../assets/home-booking-mobile.svg'
import bookingLaptop from '../assets/home-booking-laptop.svg'
import resellerTable from '../assets/home-reseller-table.svg'
import timeline from '../assets/home-market-timeline.svg'
import marketintel from '../assets/home-market-intelligence.svg'
import airportParking from '../assets/home-airportparking.oneline-mobile.svg'
// import lg from '../assets/logo.png'

export default function Home() {
    const selectListAdaptar = [
        {key: 'MARKETS', values:[]},
        {key: 'PRODUCTS', values:[]},
        {key: 'AIRLINES', values:[]},
        {key: 'CUSTOMER TYPE', values:[]},
        {key: 'DESTINATION', values:[]},
        {key: 'REASON FOR TRAVEL', values:[]},
    ]

    const analyzeDataAdapter = [
        {key: 'UTILIZATION', value: '78.2%', rate: '+2.3%', state: 'asc'},
        {key: 'AVG.DAILY RATE', value: '$15,75', rate: '-3.8%', state: 'dec'},
        {key: 'AVG.MARKET DAILY RATE', value: '$20.56', rate: '+16.5%', state: 'asc'},
        {key: 'TRANSACTIONS', value: '22,869', rate: '+2.3%', state: 'asc'},
        {key: 'REVENE', value: '1,022,387', rate: '+3.3%', state: 'dec'},
        {key: 'LEAD TIME(DAYS)', value: '9.54', rate: '+16..3%', state: 'asc'},
    ]

    return (
        <div className="divide-y p-0">
            
            {/* first page */}
            <div className="">
                <div className="absolute top-0 w-full">
                    <header className="relative z-50 w-full h-24 bg-white opacity-50">
                        <div className="container flex items-center justify-center h-full px-8 mx-auto sm:justify-between xl:px-0">
                            <div className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                                <img src={logo} className="h-16" />
                            </div>                 
                            <nav className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:-ml-32 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative hidden">
                                <a className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-16 transition-color hover:text-indigo-600" href="#">Investor Portal</a> 
                                <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-16 transition-color hover:text-indigo-600" href="#">Beta Partner</a> 
                                <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-16 transition-color hover:text-indigo-600" href="#">Knowledge Center</a>
                                <a className="font-bold duration-100 transition-color hover:text-indigo-600" href="#">About</a>
                            </nav>
                            <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                                <a className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none transition-all transition duration-100 duration-300 rounded shadow-md fold-bold bg-indigo-700 text-white sm:w-full lg:shadow-none hover:shadow-xl" href="#">Login</a>
                            </div>
                        </div>
                    </header>
                </div>

                <div className="z-10 flex w-full">
                    <div className="z-10 w-31% h-full bg-indigo-100">
                        <div className="absolute top-1/2 left-44 flex flex-col">                            
                            <h1 className="max-w-md mb-4 text-3xl font-black leading-tight text-primary sm:text-7xl xl:mb-16">Travel & Airport Parking Tech</h1>
                            <p className="max-w-xl pr-0 mb-8 text-base text-gray-600 sm:text-xl xl:text-2xl lg:pr-20">Hey Travel helps airports connect their travelers to their parking spots.</p>
                        </div>
                    </div>
                    <div className="z-0 w-69% bg-indigo-400 overflow-x-hidden">
                        <div className="w-screen">
                            <img className="" src={intro} />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* second page */}
            <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col items-center justify-center space-y-12 text-center w-full bg-gray-800 sm:w-1/2 m-16 mr-8 py-16">
                        <h1 className="text-white text-5xl">Investors</h1>
                        <p className="text-gray-300 text-2xl max-w-sm">Interested in becoming a HeyTravel investor? Click here request access to the deal or login to the investor portal.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block rounded-full w-auto px-16 py-4 border text-white text-3xl">Invest</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-7 text-center w-full bg-indigo-300 sm:w-1/2 m-16 ml-8 py-16">
                        <h1 className="text-white text-5xl">Beta Airports</h1>
                        <p className="text-white text-2xl max-w-sm">Be an innovator in the Airport Parking Industry. HeyTravel is offering exclusive beta partnerships to select airports. Beta airports get early access and preferred pricing.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block rounded-full w-auto px-16 py-4 border text-white text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-24">
                        <h1 className="max-w-md text-gray-800 text-5xl">Hey Travel’s Airport Parking Products</h1>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block bg-indigo-400 rounded-full w-auto px-16 py-4 border text-white text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* third page */}
            <div className="h-843-P2R flex divide-x">
                <div className="w-1/2 h-full">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-40">
                        <h1 className="text-gray-800 text-6xl font-bold">PARK ANALYTICS</h1>
                        <p className="text-gray-800 text-2xl max-w-sm">Hey Travel’s airport parking analytics dashboards for marketing and revenue management with global airport parking intelligence. Set prepaid parking prices in real-time with Hey Travel’s analytics AI.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block border-indigo-400 rounded-full w-auto px-16 py-4 border text-indigo-400 text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full divide-y">
                    <div className="flex flex-col justify-between items-center bg-indigo-100 py-5">
                        <div className="flex items-start rounded-full border border-gray-300">
                            <button id="btn_home_overview" className="bg-indigo-400 rounded-full w-auto px-6 py-2 border text-white text-xl">Overview</button>
                            <button id="btn_home_airAnalize" className="w-auto px-6 py-2 border text-indigo-400 text-xl">Airport Analytics</button>
                            <button id="btn_home_marketIntel" className="w-auto px-6 py-2 border text-indigo-400 text-xl">Market Intelligence</button>
                        </div>
                        <div className="flex items-start">
                            <img src={timeline}></img>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                            {selectListAdaptar.map((item, i) => {
                                return(
                                    <select className="p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" key={i}>
                                        <option className="p-3">{item.key}</option>
                                    </select>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                            {analyzeDataAdapter.map((item, i) => {
                                return(
                                    <div className="flex flex-col items-start pt-3 pb-2 px-8">
                                        <h6 className="font-bold text-xs">{item.key}</h6>
                                        <h1 className="text-3xl">{item.value}</h1>
                                        <h7 className="text-xs text-indigo-400 font-bold">{item.rate}</h7>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <div className="relative w-full bg-indigo-100">
                            <h1 className="absolute top-6 left-6 max-w-sm text-xl font-bold">YOUR AVG. DAILY RATE COMPARED TO THE MARKET</h1>
                            <img src={marketintel}></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* fourth page */}
            <div className="flex justify-end relative py-20">
                <div className="absolute -left-72">
                    <img className="" src={resellerTable} />
                </div>
                <div className="w-1/2 h-full">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-20 mb-40">
                        <h1 className="text-gray-800 text-6xl font-bold">SPOT CONNECT</h1>
                        <p className="text-gray-800 text-2xl max-w-sm">A global online distribution system that delivers your airport parking spots to the largest travel websites and resellers in the world.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block bg-indigo-400 rounded-full w-auto px-16 py-4 border text-white text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth page */}
            <div className="h-900-P2R flex">
                <div className="w-1/2">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-52">
                        <h1 className="text-gray-800 text-6xl font-bold">BOOKING ENGINE</h1>
                        <p className="text-gray-800 text-2xl max-w-sm">The Hey Travel Booking Engine is designed specifically for airpot prepaid parking. The booking engine is fully customizable, easy to manage and integrates with SPOT CONNECT, PARK WIDGET and PARK ANALYTICS.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block border-indigo-400 rounded-full w-auto px-16 py-4 border text-indigo-400 text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-indigo-100 h-full">
                </div>
            </div>

            {/* sixth page */}
            <div className="h-900-P2R flex justify-end relative py-20">
                <div className="w-1/2 h-full">
                    <div className="absolute -left-72">
                        <img className="" src={bookingLaptop} />
                    </div>
                    <div className="absolute left-96 bottom-6">
                        <img className="" src={bookingMobile} />
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-20 mb-40">
                        <h1 className="text-gray-800 text-6xl font-bold">BOOKING WIDGET</h1>
                        <p className="text-gray-800 text-2xl max-w-sm">The Hey Travel’s booking widget is design specifically to integrate with your airport’s prepaid parking website.  Start the booking journey on anywhere by placing the widget throughout your website, partner websites and in adverts.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block bg-indigo-400 rounded-full w-auto px-16 py-4 border text-white text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh page */}
            <div className="relative">
                <div className="flex flex-col w-full text-center items-center jusity-center space-y-16 my-24">
                    <h1 className="max-w-lg text-gray-800 text-6xl">Hey Travel Traveler Products</h1>
                    <div className="w-full text-center">
                        <a href="#" className="inline-block bg-indigo-400 rounded-full w-auto px-16 py-4 border text-white text-3xl">Learn More</a>
                    </div>
                </div>
            </div>

            {/* eighth page */}
            <div className="relative w-full h-900-P2R bg-indigo-100">
                <div className="z-0 w-full h-full overflow-hidden">
                    <img src={airportParking} className="mt-16 -ml-88"></img>
                </div>
                <div className="z-10 absolute right-20 bottom-36 bg-white px-8 py-24">
                    <div className="flex flex-col text-center items-center jusity-center space-y-8">
                        <h1 className="text-gray-800 text-6xl font-bold">AirportParking.Online</h1>
                        <p className="text-gray-800 text-4xl max-w-lg">Airportparking.online connects travelers with the largest selection of airport parking options.</p>
                        <div className="w-full text-center">
                            <a href="#" className="inline-block border-indigo-400 rounded-full w-auto px-16 py-4 border text-indigo-400 text-3xl">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="z-10 flex flex-row justify-between w-full absolute top-1/2 px-2">
                    <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10094;</a>
                    <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10095;</a>
                </div>
            </div>

            <Footer />
        </div>
    )
}