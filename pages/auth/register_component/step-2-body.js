export default function RegisterStep2Body(props) {
    
    return (
        <div className="relative border-t border-b">
            <h1 className="text-gray-700 text-3xl text-center my-16">Registration</h1>
            <div className="flex justify-center mb-12 sm:mb-24">
                <div className="flex flex-col justify-center relative sm:flex-row">
                    <div className="flex items-start relative mm:space-x-2 sm:flex-col sm:space-y-6">
                        <div className="bg-indigo-200 rounded-full w-5 h-5"></div>
                        <h4 className="text-indigo-200 font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute">PERSONAL INFORMATION</h4>
                    </div>
                    <div className="bg-indigo-200 w-2 h-12 mx-1.5 sm:w-96 sm:h-1 sm:my-2 sm:mx-0"></div>
                    <div className="flex items-start relative mm:space-x-2 sm:flex-col sm:space-y-6">                            
                        <div className="bg-indigo-400 rounded-full w-5 h-5"></div>
                        <h4 className="text-indigo-400 font-bold w-60 text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute">Non Closures & IP Assignments</h4>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="sm:w-3/5 space-y-5">
                    <p className="text-2xl text-center mm:p-6 mm:text-xl">
                        A Hey Travel representative has emailed you an IP Assignment and Non Disclosure agreement. Once those documents are executed and your access is approved you will be emailed a login and password.
                    </p>
                    <h3 className="bg-gray-900 p-3 text-white">Agreement Status</h3>
                    <div className="flex space-x-36">
                        <div className="text-2xl space-y-8 mm:text-base mm:pl-3">
                            <h1>Non Disclosure Agreement</h1>
                            <h1>IP Assignment</h1>
                        </div>
                        <div className="text-2xl space-y-5 mm:text-base">
                            <button className="px-3 py-1 text-indigo-400 rounded-full border border-indigo-200" id="btn_download_nda">Download</button>
                            <br></br><button className="px-3 py-1 text-indigo-400 rounded-full border border-indigo-200" id="btn_download_ipa">Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="p-3 my-12 bg-indigo-200 text-white text-1xl rounded-full w-32 flex justify-center m-auto"
                    id="next_btn"
                    onClick={props.SwitchRegisterStep}>Back</button>
        </div>
    )
}