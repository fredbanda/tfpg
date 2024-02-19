import Image from 'next/image'
import React from 'react'

const GraphicDesign = () => {
  return (
    <div className='text-white'>
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-400 bg-opacity-50">
                Websites  & Software<br />  Designs That Grow Businesses
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-4xl text-center mx-auto px-4">
            Elevate your business to new heights with our unparalleled expertise, delivering transformative web and app solutions tailored for your success.
            </p>
        </div>
    <section className=" dark:bg-gray-500 rounded-lg bg-black/[0.10] antialiased bg-grid-white/[0.02]">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text dark:text-white">We didn&apos;t reinvent the wheel</h2>
            <p className="mb-4">
                In a world driven by digital transformation, partnering with us as your preferred web and software development company guarantees more than just solutions; it ensures innovation, reliability, and seamless experiences. </p>
            <p>With over a decade of mastery across diverse stacks like MERN, MEAN, MEVN, Serverless, LAMP, PERN, and Ruby on Rails, our expertise is not just powerful—it's transformative. Let's elevate your business together.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg"
            priority 
            src={"/assets/business2.jpg"}
            alt="office content 1"
            width={500} 
            height={500}
            />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" 
            src={"/assets/business3.jpg"}
            priority
            width={500}
            height={500}
            alt="office content 2" />
        </div>
    </div>
</section>
    </div>
  )
}

export default GraphicDesign
