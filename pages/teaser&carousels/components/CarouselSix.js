import React from 'react'
import { CarouselData } from "../CarouselData"

export default class CarouselSix extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 0,
            items: CarouselData
        }
    }

    nextSlide = () => {
        /*let newSlide =
          this.state.currentSlide === CarouselData.length - 2
            ? this.state.currentSlide
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });*/

        let next = this.state.items
        next = next.map((_, i) => {
            return next[(i + 1) % next.length]
        })
        this.setState({
            items: next
        })
    };
    
    prevSlide = () => {
        /*let newSlide =
            this.state.currentSlide === 0
            ? 0
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });*/
        
        let next = this.state.items
        next = next.map((_, i) => {
            return next[(i - 1 + next.length) % next.length]
        })
        this.setState({
            items: next
        })
    };

    conputedLeft = () =>{
        const {currentSlide} = this.state;
        const carouselPostWidth = 20.5, carouselPostMargin = 1;

        let leftSpan = parseFloat(`${-currentSlide * parseFloat(carouselPostWidth)}`)
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
                <div className="relative overflow-hidden whitespace-nowrap py-16">
                    <div className="h-full relative transtion-all duration-300" style={this.conputedLeft()}>
                        {this.state.items.map((item, i) => {
                            return (
                            <div 
                                key={i}
                                className={
                                    `transtion-all duration-300 w-82 mr-4 h-full bg-white shadow-lg inline-block whitespace-normal`
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
                        onClick={() => this.prevSlide()}
                        className={
                        this.state.currentSlide > 0
                            ?'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-100'
                            :'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-50'
                        }>&#10094;</a>
                    <a  onClick={() => this.nextSlide()}
                        className={
                        this.state.currentSlide < CarouselData.length - 1
                            ?'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-100'
                            :'bg-blue-self px-4 py-2 text-white cursor-pointer opacity-50'
                        }>&#10095;</a>
                </div>
            </div>
        )
    }
}