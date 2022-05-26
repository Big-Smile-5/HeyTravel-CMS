import React from 'react'
import { CarouselData } from "../CarouselData"

export default class CarouselTwo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 0
        }
    }

    nextSlide = () => {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 2
            ? this.state.currentSlide
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };
    
    prevSlide = () => {
        let newSlide =
            this.state.currentSlide === 0
            ? 0
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    conputedLeft = () =>{
        const {currentSlide} = this.state;
        const carouselPostWidth = 20.5, carouselPostMargin = 1;

        let leftSpan = parseFloat(`${-currentSlide * parseFloat(carouselPostWidth)}`)
        console.log(leftSpan)
        return{
            left: `${leftSpan - (carouselPostMargin * currentSlide)}rem`
        }
    }

    changeImagePosition = (index) =>{
        const {currentSlide} = this.state
        
        let nextSlide = currentSlide + index;
        if(nextSlide < 0) {
            nextSlide = 0;
        }
        else if(nextSlide > CarouselData.length - 1) {
            nextSlide = CarouselData.length - 1
        }

        this.setState({
            currentSlide: nextSlide
        })
    }

    render() {
        return (
            <div className="h-600-P2R relative flex bg-indigo-50">
                <div className="w-1/2  flex justify-center">
                    <div className="flex flex-col justify-center w-auto space-y-6">
                        <h1 className="text-7xl font-bold text-left self-start">EXPLORE</h1>
                        <p  className="max-w-lg">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                </div>

                <div className="relative w-1/2 overflow-hidden whitespace-nowrap py-16">
                    <div className="h-full relative transtion-all duration-300" style={this.conputedLeft()}>
                        {CarouselData.map((item, i) => {
                            return (
                            <div 
                                key={i}
                                className={
                                    `w-82 mr-4 h-full bg-white shadow-lg inline-block whitespace-normal`
                                }
                            >
                                <img className="w-full h-1/2 object-cover" src={item.image}></img>
                                <h1 className="font-bold p-3">First Box</h1>
                                <p className="w-80 wrap p-3">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </p>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="z-10 flex flex-row justify-between w-full absolute top-1/2 px-2">
                    <a
                        onClick={() => this.changeImagePosition(-2)}
                        className={
                        this.state.currentSlide > 0
                            ?'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-100'
                            :'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-50'
                        }>&#10094;</a>
                    <a  onClick={() => this.changeImagePosition(2)}
                        className={
                        this.state.currentSlide < CarouselData.length -2
                            ?'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-100'
                            :'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-50'
                        }>&#10095;</a>
                </div>
            </div>
        )
    }
}