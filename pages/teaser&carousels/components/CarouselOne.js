import React from 'react'
import { CarouselData } from "../CarouselData"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

export default class CarouselOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            paused: false,
        };
     }

    componentDidMount(){
        setInterval(() => {
            if(this.state.paused === false){
            let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1
            this.setState({currentSlide: newSlide})
            }
        }, 3000)
    }

    nextSlide = () => {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };
    
    prevSlide = () => {
        let newSlide =
            this.state.currentSlide === 0
            ? CarouselData.length - 1
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = (index) => {
        this.setState({ currentSlide: index });
    };

    render() {
        return (
            <div className="h-600-P2R flex">
                <div className="w-1/2 h-full bg-indigo-100">
                    {CarouselData.map((slide, index) => {
                        return (
                        <img
                            src={slide.image}
                            alt="This is a carousel slide"
                            key={index}
                            className={
                            index === this.state.currentSlide
                                ? "block w-full h-full object-cover"
                                : "hidden"
                            }
                            onMouseEnter={() => {
                                this.setState({paused: true})
                            }}
                            
                            onMouseLeave={() => {
                                this.setState({paused: false})
                            }}
                        />
                        );
                    })}
                </div>
                <div className="relative flex flex-col justify-center place-items-center w-1/2 h-full space-y-6 text-center">
                    <h1 className="text-6xl font-bold">EXPLORE</h1>
                    <p  className="max-w-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a className="w-auto border-blue-self border-2 rounded-full text-blue-self px-6 py-2">Call to Action</a>
                    
                    <div className="absolute w-full flex justify-center bottom-6">
                        {CarouselData.map((element, index) => {
                            return (
                                <div
                                    className={
                                    index === this.state.currentSlide
                                        ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                        : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {
                                    this.setCurrentSlide(index);
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}