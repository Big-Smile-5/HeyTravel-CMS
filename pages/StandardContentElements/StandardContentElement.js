import { useState, useEffect } from 'react'

import { CarouselData } from "../teaser&carousels/CarouselData"

export default function StandardContent() {
    
    const [currentId, SetCurrentId] = useState(0)

    useEffect(async => {
        let id = setTimeout(() => {
            let newSlide = currentId === CarouselData.length - 1 ? 0 : currentId + 1
            SetCurrentId(newSlide)
        }, 3000)
        return () => clearTimeout(id)
    })

    return (
        <div className="flex flex-col divide-y space-y-4">
            <div className="h-650-P2R flex py-12">
                <div className="w-1/2 flex justify-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="max-w-xs text-6xl font-bold">HEADLINE INTRO</h1>
                        <p className="max-w-lg text-xl">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 flex">
                    <div className="w-full bg-indigo-100 h-full">
                        <img src={CarouselData[currentId].image} className="w-full h-full" />
                    </div>
                    <div className="w-40 h-full flex flex-col justify-center">
                        <div className="space-y-6 h-auto w-full pl-12">
                            {CarouselData.map((_, index) => {
                                return (
                                    <div 
                                        className={
                                        index === currentId
                                            ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                            : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                                        }
                                        key={index}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-600-P2R">
                <div className="flex-grow-0 w-60% h-full bg-indigo-100">
                </div>
                <div className="flex flex-col justify-center items-start flex-grow-0 w-40% h-full space-y-4 pl-12">
                    <h1 className="text-3xl">Image with text</h1>
                    <p className="text-md max-w-sm">
                    Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum no sea et nor takimata sanctus est Lorem ipsum dolor.
                    </p>
                    <a className="flex-grow-0 w-auto h-auto rounded-full cursor-pointer border border-blue-self px-6 py-2">Call to Action</a>
                </div>
            </div>

            <div className="h-450-P2R grid grid-cols-2 px-24 gap-12">
                <div className="h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-3xl font-bold">Feature One</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                    </p>
                </div>
                <div className="h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-3xl font-bold">Feature Two</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                    </p>
                </div>
            </div>

            <div className="h-350-P2R grid grid-cols-3 px-24 gap-12">
                <div className="h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-2xl font-bold">Feature One</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.
                    </p>
                </div>
                <div className="h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-2xl font-bold">Feature Two</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.
                    </p>
                </div>
                <div className="h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-2xl font-bold">Feature Three</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.
                    </p>
                </div>
            </div>

            <div className="h-350-P2R grid grid-cols-3 px-24 gap-12">
                <div className="h-full flex flex-col text-center justify-center space-y-6">
                    <span className="text-blue-self text-7xl">
                        <i className="far fa-check-circle"></i>
                    </span>
                    <h1 className="text-2xl font-bold">Feature One</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                    </p>
                </div>
                <div className="h-full flex flex-col text-center justify-center space-y-6">
                    <span className="text-blue-self text-7xl">
                        <i className="far fa-check-circle"></i>
                    </span>
                    <h1 className="text-2xl font-bold">Feature Two</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                    </p>
                </div>
                <div className="h-full flex flex-col text-center justify-center space-y-6">
                    <span className="text-blue-self text-7xl">
                        <i className="far fa-check-circle"></i>
                    </span>
                    <h1 className="text-2xl font-bold">Feature Three</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                    </p>
                </div>
            </div>

            <div className="h-1000-P2R flex flex-col justify-evenly px-24">
                <h1 className="text-5xl font-bold text-center">THIS IS A HEADLINE</h1>
                <div className="w-full grid gird-cols-2 grid-flow-col gap-10">
                    <div className="grid gird-rows-3 gap-10">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                            <li>At vero eos et accusam et justo duo dolores et ea rebum</li>
                            <li>Justo duo dolores et ea rebum. Stet clita kasd</li>
                            <li>Magna aliquyam erat, sed diam voluptua at vero eos et accus</li>
                            <li>Invidunt ut labore et dolore magna aliquyam erat, sed diam</li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                        </p>
                    </div>
                    <div className="grid gird-row-2 gap-10">
                        <div className="w-full h-72 bg-indigo-100"></div>
                        <div>
                            <h1 className="text-xl font-bold mb-4">Subheadline</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br></br><br></br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            <a className="text-blue-self cursor-pointer">See more...</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-750-P2R">
                <h1>Features</h1>
                
            </div>
        </div>
    )
}