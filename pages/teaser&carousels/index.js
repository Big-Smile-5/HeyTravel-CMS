import React from 'react'
import CarouselOne  from "./components/CarouselOne"
import CarouselTwo from './components/CarouselTwo'
import CaruoselThree from './components/CarouselThree'
import CarouselFour from './components/CarouselFour'
import CaruoselSix from './components/CarouselSix'

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CarouselOne />
                <CarouselTwo />
                <CaruoselThree />
                <CarouselFour />
                <CaruoselSix />
            </div>
        )
    }
}