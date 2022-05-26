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
            <div className="h-600-P2R relative flex">
                <div className="w-full relative overflow-hidden whitespace-nowrap">
                    <div className="flex h-full relative transform -translate-x-72">
                        <img src={this.state.items[0].image} className="w-144 py-20 opacity-60"></img>
                        <img src={this.state.items[1].image} className="w-192 py-6"></img>
                        <img src={this.state.items[2].image} className="w-144 py-20 opacity-60"></img>
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