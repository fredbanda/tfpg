import React from 'react'

const ServiceList = () => {
  return (
    <div>
      <div className="px-3 py-20 bg-opacity-10 " >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group rounded-md bg-neutral-500 shadow-xl shadow-neutral-100 border ">

            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">Most Experienced Team</p>
                <p className="mt-2 text-sm text-neutral-100">We are a dream team when it comes to work ethics. We always finish what we start ahead of time. Let professionals do the work to save you money.</p>
            </div>

            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-orange-500 hover:text-gray-600 shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">Cobol Legacy Code</p>
                <p className="mt-2 text-sm text-neutral-100 ">We are the best Cobol developers in the world. We can set your application to perform like never before. Give us a call today.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">Internet Security</p>
                <p className="mt-2 text-sm text-neutral-100">Well all crooks are living on the internet now. Are your applications really secure from breaks? Let us help you out.</p>
            </div>


            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">Shopify Stores</p>
                <p className="mt-2 text-sm text-neutral-100">Ever heard of dropshipping or you want to sell your products? Shopify is always a great choice. They have an already proven formulae that work.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">Greenfield Projects</p>
                <p className="mt-2 text-sm text-neutral-100">You have an Idea for an application that will change the world? Well you need people like us who can breathe life into that idea</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-500 cursor-pointer">
                <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p className="text-xl font-medium text-neutral-100 mt-3">C# Applications</p>
                <p className="mt-2 text-sm text-neutral-100">We have years of working with C# applications and SQL servers so you wont go wrong with us. What are you waiting for?
                </p>
            </div>




        </div>

        <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex flex-col justify-between items-center">
        
            <p className=" text-white"> <span className="text-2xl font-medium items-center">Still Confused ?</span> <br /> <span className="text-lg">Book For Free Career one on one Consultation Today ! </span></p>
            <button className="px-5 py-3 font-medium text-neutral-100 shadow-xl  hover:bg-black duration-150  bg-yellow-400 rounded-md">BOOK AN APPOINTMENT </button>
        </div>

    </div>
    </div>
  )
}

export default ServiceList
