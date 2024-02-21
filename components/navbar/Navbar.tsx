"use client"

import { AlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DropDownMenu from './DropDownMenu'

interface NavbarProps {
    scrollToWebDesign: () => void
    scrollToServiceList: () => void
    scrollToLegacyCode: () => void
    scrollToShopifyStores: () => void
    scrollToServices: () => void
    scrollToPricing: () => void 
}

const Navbar: React.FC<NavbarProps> = ({
    scrollToWebDesign,
    scrollToServiceList,
    scrollToLegacyCode,
    scrollToShopifyStores,
    scrollToServices,
    scrollToPricing
}) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible)
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false)
    }

  return (
    <div>
      <div className="p-3 md:p-3 flex items-center justify-between z-50">
        <div>
            <Link href={"/"} className='cursor-pointer'>
                <Image
                priority
                src={"/assets/logo.png"}
                alt='logo'
                width={30}
                height={30}
                />
            </Link>
        </div>
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg--neutral-500 bg-opacity-50">
            <div onClick={scrollToWebDesign} className='hover:text-gray-50'>Web Development</div>
            <div onClick={scrollToServiceList} className='hover:text-gray-50'> Software Development</div>
            <div onClick={scrollToLegacyCode} className='hover:text-gray-50'>Graphic Design</div>
            <div onClick={scrollToShopifyStores} className='hover:text-gray-50'>Shopify Stores</div>
            <div onClick={scrollToPricing} className='hover:text-gray-50'>Our Pricing</div>
        </div>
        <div className="flex md:hidden">
            {isDropDownVisible ? (
                <div 
                onClick={closeDropDown}
                className='w-8 h-8 text-slate-300 cursor-pointer'
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                </div>
            ): (
                <AlignJustify
                onClick={toggleDropDown}
                className='w-8 h-8 text-slate-300 cursor-pointer'
                />
            )}
        </div>
        <div className="hidden md:flex">
            <Link href="/contact"   
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-sky-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50"
            >

                Contact Us
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
