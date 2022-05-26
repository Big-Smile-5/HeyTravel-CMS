import { CarouselData } from '../CarouselData'
import {useState, useEffect} from 'react'
import {
    Transition,
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"
import { CSSTransition } from 'react-transition-group';

export default function CaruoselThree() {

    const [active, setActive] = useState(1);
    const [pause, setPause] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            setActive((active + 1) % CarouselData.length)
        }, 3000)
        return () => clearTimeout(id);
    })

    function generateItems() {
        var items = []
        for (var i = active - 1; i <= active + 1; i++) {
            var index = i
            if (i < 0) {
                index = CarouselData.length + i
            } else if (i >= CarouselData.length) {
                index = i % CarouselData.length
            }
            items.push(
                <div className="relative w-88 h-120">
                    <img src={CarouselData[index].image}
                         className={
                         i == active
                            ?`w-88 h-120 object-cover`
                            : `w-88 h-120 object-cover grayscale`  
                         } />
                    <div className="absolute w-full h-full top-0 flex flex-col justify-between text-gray-600 text-center">
                        <h1 className="text-2xl mt-10 font-bold">TEABOX WITH HEADLINE</h1>
                        { i == active &&
                        <p className="absolute flex justify-center top-1/2 transform -translate-y-1/2 px-6 text-center">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p> }
                        { i == active && <a className="absolute bottom-0 flex justify-center place-items-center bg-blue-self w-full text-white h-12">Find out more</a> }
                    </div>
                </div>
            )
        }
        console.log(items)
        return items
    }

    return (
        <div className="h-843-P2R flex flex-col justify-evenly">
            <div className="flex flex-col justify-center place-items-center w-auto space-y-6">
                <h1 className="text-7xl font-bold">EXPLORE</h1>
                <p  className="max-w-2xl">
                    {active}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
            </div>
            <CSSTransition in={true} timeout={2000} classNames="my-node">
            {/* <Transition in={false} timeout={200}> */}
                <div className="flex justify-center">
                    {generateItems()}
                </div>
            {/* </Transition> */}
            </CSSTransition>
        </div>
    )
}