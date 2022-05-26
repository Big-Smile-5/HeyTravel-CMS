import { useState } from 'react'
import Header from './header'
import Footer from '../footer'
import RegisterStep1Body from './register_component/step-1-body'
import RegisterStep2Body from './register_component/step-2-body'

export default function Register() {
    const [registerStep, setRegisterStep] = useState(1);

    const SwitchRegisterStep = function() {
        if(registerStep == 1) {
            setRegisterStep(2);
        } else {
            setRegisterStep(1);
        }
    }

    if(registerStep == 1) {
        return (
            <div className="flex flex-col">
                <Header />
                <RegisterStep1Body
                    SwitchRegisterStep = {SwitchRegisterStep.bind(this)}
                 />
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <Header />
                <RegisterStep2Body
                    SwitchRegisterStep = {SwitchRegisterStep.bind(this)}
                />
                <Footer />
            </div>
        )
    }
}