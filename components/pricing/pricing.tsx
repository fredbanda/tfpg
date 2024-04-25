import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
        <>
        <div className="pt-5 bg-gray-900" id="pricing">
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">For teams that are not scared of growth</p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the package that works best</p>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                <h2 id="product1" className="text-lg font-semibold leading-8 text-white ">Startup</h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">Perfect for that side hustle or just starting out.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">ZRA 299.00</span><span className="leading-6 text-gray-300 text-4xl font-bold"> / Mo</span>
                </p>

                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>5 x Responsive pages</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>5 Well Researched Keywords</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>minimum 6 months</li>
                </ul>
                <Link href="/book" aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Get Started
                </Link>
            </div>

            <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                <div className="flex items-baseline justify-between gap-x-4">
                <h2 id="product2" className="text-lg font-semibold leading-8 text-white">Growthmate</h2>
                <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">For businesses looking to expand their reach including but not limited to online stores</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">ZAR 399.00</span><span className="leading-6 text-gray-300 text-4xl font-bold"> / Mo</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>Everything in Startup</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>Well Researched 15 Keywords</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>Minimum 6 months </li>
                </ul>
                <Link href="/book" aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Get Started
                </Link>
            </div>

            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                <h2 id="product3" className="text-lg font-semibold leading-8 text-white">Enterprise</h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">For those businesses looking for an upper hand over their competition</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">ZAR 599.00</span><span className="  leading-6 text-gray-300 text-4xl font-bold"> / Mo</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>Everything on Growthmate</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>30 well researched Keywords</li>
                <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                    <path fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"></path>
                    </svg>Minimum 6 Months</li>
                </ul>
                <Link href="/book" aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Get Started
                </Link>
            </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default Pricing
