import computerSVG from '../assets/special-content-computer.svg'
import amazonSVG from '../assets/amazon.svg'
import paypalSVG from '../assets/paypal.svg'
import ebaySVG from '../assets/ebay.svg'
import visaSVG from '../assets/visa.svg'
import userAvatarSVG from '../assets/user-avatar.svg'
import acrobatAvatarSVG from '../assets/acrobat-avatar.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Accordion from '../accordion/accordion'

export default function SpecialContentDeliver() {

    const documentAdapter = [
        { title: 'FIRST DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'SECOND DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'THIRD DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'FOURTH DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'FIFTH DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'SIXTH DOCUMENT', date: '28th May', size: '13,5MB'},
    ]

    const companyInfoAdapter = [
        { title: 'CUSTOMERS', amount: 246},
        { title: 'EMPLOYEES', amount: 33},
        { title: 'PRODUCTS', amount: 16},
        { title: 'MISSION', amount: 1},
    ]

    const featuresAdapter = [
        { title: 'First Features', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur.'},
        { title: 'Second Features', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur.'},
        { title: 'Third Features', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur.'},
    ]

    const  employeeAdapter = [
        {
            name: 'EMPLOYEE ONE',
            jobTitle: 'JOB TITLE',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
            name: 'EMPLOYEE TWO',
            jobTitle: 'JOB TITLE',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
            name: 'EMPLOYEE THREE',
            jobTitle: 'JOB TITLE',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
    ]

    const accorditonAdapter = [{
        label: 'Accordion 1',
        headline: 'Accordion Headline',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    },
    {
        label: 'Accordion 2',
        headline: 'Accordion Headline',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    },
    {
        label: 'Accordion 3',
        headline: 'Accordion Headline',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    },
    {
        label: 'Accordion4',
        headline: 'Accordion Headline',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    },
    {
        label: 'Accordion 5',
        headline: 'Accordion Headline',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    }]

    return (
        <div className="divide-y space-y-6">

            <div className="w-full h-650-P2R flex flex-col justify-center space-y-24">
                <div className="flex justify-center space-x-24">
                    <img src={computerSVG}></img>
                    <div className="flex flex-col justify-center w-max space-y-10">
                        <h1 className="text-gray-900 text-7xl max-w-sm">Explore all the features</h1>
                        <p className="text-gray-900 text-md max-w-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>

                <div className="flex justify-center divide-x">
                    <div className="relative max-w">
                        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 overflow-hidden inline-block">
                            <div class="bg-blue-self h-3 w-3 bg-blue-self rotate-45 transform origin-bottom-left"></div>
                        </div>
                        <div className="w-max bg-blue-self px-16 py-2 text-white text-center">
                            <h1 className="tracking-wider leading-5">The best Futures<br></br>in one kit</h1>
                        </div>
                    </div>
                    <div className="w-max bg-dark-self px-16 py-2 text-white text-center">
                        <h1 className="tracking-wider leading-5">The best Futures<br></br>in one kit</h1>
                    </div>
                    <div className="w-max bg-dark-self px-16 py-2 text-white text-center">
                        <h1 className="tracking-wider leading-5">The best Futures<br></br>in one kit</h1>
                    </div>
                    <div className="w-max bg-dark-self px-16 py-2 text-white text-center">
                        <h1 className="tracking-wider leading-5">The best Futures<br></br>in one kit</h1>
                    </div>
                </div>
            </div>

            <div className="h-300-P2R flex flex-col justify-center space-y-10 bg-indigo-100">
                <h1 className="text-4xl text-center">What are you looking for?</h1>
                <div className="flex items-start justify-center relative">    
                    <input className="w-128 px-10 py-2 focus:outline-none rounded-full" id="input-search" placeholder="Type here" />
                    <FontAwesomeIcon className="absolute top-1/2 transform -translate-x-64 -translate-y-1/2 text-gray-400" icon={faSearch} />
                    <a className="w-auto bg-blue-self rounded-full text-white px-6 py-2 -ml-12">Search</a>
                </div>
            </div>

            <div className="h-500-P2R flex flex-col justify-center space-y-36">
                <div className="flex justify-center">
                    <div className="max-w-lg space-y-6 text-center">
                        <h1 className="text-6xl">Our Customers</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-24">
                    <a><img src={amazonSVG}></img></a>
                    <a><img src={ebaySVG}></img></a>
                    <a><img src={paypalSVG}></img></a>
                    <a><img src={visaSVG}></img></a>
                </div>
            </div>

            <div className="h-400-P2R flex flex-col h-full justify-around place-items-center space-y-2 py-16 bg-indigo-100">
                <h1 className="text-4xl text-center">I am looking for
                    <select className="p-2 bg-transparent border-b-2 border-blue-self text-blue-self focus:outline-none">
                        <option className="p-3">Downloads</option>
                    </select>
                    <br></br>for
                    <select className="p-2 bg-transparent border-b-2 border-blue-self text-blue-self focus:outline-none">
                        <option className="p-3">All Devices</option>
                    </select>
                </h1>
                <a className="w-auto bg-blue-self rounded-full text-white px-8 py-2">Show Results</a>
            </div>

            <div className="h-750-P2R flex flex-col justify-center place-items-center space-y-12">
                <div className="max-w-md space-y-6 text-center">
                    <h1 className="text-6xl">Our Team</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                    </p>
                </div>

                <div className="flex flex-center justify-evenly px-16">
                    {employeeAdapter.map((item, i) => {
                        return (
                            <div className="flex flex-col place-items-center text-center max-w-sm">
                                <img src={userAvatarSVG}></img>
                                <h1 className="text-2xl font-bold pt-10">{item.name}</h1>
                                <h5 className="text-lg pt-3 pb-6">{item.jobTitle}</h5>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="h-600-P2R flex flex-col justify-evenly px-20">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">DOWNLOADS</h1>
                    <div className="inline space-x-4">
                        <span>Choose your Language</span>
                        <select className="px-6 py-1 text-left border border-blue-self rounded-full text-blue-self focus:outline-none">
                            <option className="p-3">English</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-6">
                    {documentAdapter.map((item, i) => {
                        return (
                            <div className="flex border-b border-gray-300 pb-4" key={i}>
                                <img className="flex-grow-0" src={acrobatAvatarSVG}></img>
                                <h1 className="flex-grow text-blue-self font-bold pl-3">{item.title}</h1>
                                <h3 className="flex-grow-0">{item.date}, {item.size}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="h-auto flex flex-col justify-center p-20">
                <Accordion hiddenTexts={accorditonAdapter} />
            </div>

            <div className="h-800-P2R flex flex-col justify-center bg-indigo-50">
                <div className="flex flex-col place-items-center text-center space-y-4">
                    <img className="w-32 rounded-full" src={userAvatarSVG}></img>
                    <h1 className="text-5xl">Hello<br></br>Let's take a tour!</h1>
                    <p className="max-w-md">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a className="w-auto bg-blue-self rounded-full text-white px-6 py-2">Start now</a>
                </div>
            </div>

            <div className="h-625-P2R flex flex-col justify-evenly place-items-center">
                <div className="max-w-md space-y-6 text-center">
                    <h1 className="text-6xl">Our Company</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                    </p>
                </div>
                <div className="flex justify-evenly w-full">
                    {companyInfoAdapter.map((item, i) => {
                        return (
                            <div className="w-auto text-blue-self space-y-2" key={i}>
                                <h1 className="text-5xl font-bold">{ item.amount }</h1>
                                <h5 className="text-xs">{ item.title }</h5>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="h-700-P2R flex justify-around">
                <div className="flex flex-col justify-center w-63% h-full -ml-72">
                    <img className="" src={computerSVG}></img>
                </div>
                <div className="flex flex-col justify-evenly pr-16">
                    {featuresAdapter.map((item, i) => {
                        return (
                            <div className="max-w-xl">
                                <div className="flex items-center space-x-2">
                                    <span className="text-blue-self text-3xl"><i className="far fa-check-circle"></i></span>
                                    <h1 className="font-bold">{ item.title }</h1>
                                </div>
                                <p className="pl-8">{ item.text }</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}