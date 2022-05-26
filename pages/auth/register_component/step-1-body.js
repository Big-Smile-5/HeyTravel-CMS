export default function RegisterStep1Body(props) {
    
    return (
        <div className="relative border-t border-b">
            <h1 className="my-16 text-gray-600 text-3xl text-center">Registration</h1>
            <div className="flex justify-center mb-12 sm:mb-24">
                <div className="flex flex-col justify-center relative sm:flex-row">
                    <div className="flex items-start relative mm:space-x-2 sm:flex-col sm:space-y-6">
                        <div className="bg-indigo-400 rounded-full w-5 h-5"></div>
                        <h4 className="text-indigo-400 font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute">PERSONAL INFORMATION</h4>
                    </div>
                    <div className="bg-indigo-200 w-2 h-12 mx-1.5 sm:w-96 sm:h-1 sm:my-2 sm:mx-0"></div>
                    <div className="flex items-start relative mm:space-x-2 sm:flex-col sm:space-y-6">                            
                        <div className="bg-indigo-200 rounded-full w-5 h-5"></div>
                        <h4 className="text-indigo-200 font-bold w-60 text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute">Non Closures & IP Assignments</h4>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div className="space-y-3 w-96 sm:w-auto">
                    <div class="flex">
                        <div class="flex items-center mb-2 mr-4">
                            <input type="radio" id="radio_male" name="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                            <label for="radio-male" class="text-gray-600">Mr.</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input type="radio" id="radio_female" name="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                            <label for="radio-female" class="text-gray-600">Mrs.</label>
                        </div>
                    </div>

                    <div className="mm:space-y-3 sm:space-x-3">
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none rounded" id="firstname" placeholder="First Name" />
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none rounded" id="lastname" placeholder="Last Name" />
                    </div>
                    
                    <div className="mm:space-y-3 sm:space-x-3">
                        <select className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded">
                            <option className="p-3">Apple</option>
                            <option className="p-3">Ant</option>
                        </select>
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" id="lastname" placeholder="Company" />
                    </div>
                    
                    <div className="mm:space-y-3 sm:space-x-3">
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded sm:144" id="firstname" placeholder="Street" />
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded sm:48" id="lastname" placeholder="No." />
                    </div>
                    
                    <div className="mm:space-y-3 sm:space-x-3">
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" id="firstname" placeholder="City" />
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" id="lastname" placeholder="Zip" />
                    </div>
                    
                    <div className="mm:space-y-3 sm:space-x-3">
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" id="firstname" placeholder="E-Mail" />
                        <input className="w-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded" id="lastname" placeholder="Phone" />
                    </div>
                </div>
            </div>
            <button className="p-3 my-12 bg-indigo-500 text-white text-1xl rounded-full w-32 flex justify-center m-auto"
                    id="btn_next"
                    onClick={props.SwitchRegisterStep}>Next</button>
        </div>
    )
}