import React from 'react'

const Pricing = () => {
  return (
        <>
    <div className="min-h-screen flex justify-center items-center mt-[-48px] mb-[88px]">
        <div className="">
            <div className="text-center font-semibold">
                <h1 className="text-5xl">
                    <span className="text-blue-700 tracking-wide">Flexible Plans To Grow </span>
                    <span>Plans</span>
                </h1>
                <p className="pt-6 text-xl text-gray-400 font-normal px-8 md:w-full text-center w-full">
                    Choose a plan that works best for you and your team.<br /> All the plans include one year domain registration but excludes hosting.
                </p>
            </div>
            <div className="pt-24 flex flex-row">
                <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Startup</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">ZAR </span>
                        <span className="text-3xl font-semibold">2990.00</span>
                        <span className="text-gray-400 font-medium"></span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                responsive
                            </span>
                            <span className="pl-2">
                                Website with <span className="text-black">5 pages</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                well
                            </span>
                            <span className="pl-2">
                                researched <span className="text-black">5 keywords</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                plus
                            </span>
                            <span className="pl-2">
                                <span className="text-black">3 months of</span> free edits
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Get Started
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    Now
                                </span>
                            </p>
                        </a>
                    </div>
                </div>

                <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                    <h1 className="text-white font-semibold text-2xl">Growth Plan</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">ZAR </span>
                        <span className="text-3xl font-semibold">3499.00</span>
                        <span className="text-gray-400 font-medium"></span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                With
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-white">Startup</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                               Well
                            </span>
                            <span className="pl-2">
                                Researched <span className="text-white">15 Keywords</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                        
                            </span>
                            <span className="pl-2">
                                <span className="text-white">6 months</span> of free editing
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Get Started
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    Now
                                </span>
                            </p>
                        </a>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>

                <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top"> ZAR </span>
                        <span className="text-3xl font-semibold">5999.00</span>
                        <span className="text-gray-400 font-medium"></span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                With
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-black">Growth Plan</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                               Our
                            </span>
                            <span className="pl-2">
                                Growth <span className="text-black">oriented</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                With
                            </span>
                            <span className="pl-2">
                                <span className="text-black">Unlimited</span> Responsive Pages
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
  )
}

export default Pricing
