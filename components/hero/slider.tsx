 "use client"
 
 import Slider from "react-slick"
 import Image from "next/image"
 import { useMediaQuery } from "react-responsive"

 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 
 const SliderOne = () => {
    const isMediumScreen = useMediaQuery({  minWidth: 768, maxWidth: 1024 })
    const isSmallScreen = useMediaQuery({maxWidth: 767})

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        className: "rounded-md px-2 md:p-10 mx-auto cursor-pointer center-mode",	
    }
    if(isMediumScreen){
        settings.slidesToShow = 1.67
    }else
    if(isSmallScreen){
        settings.slidesToShow = 1
    }

    return (
        <div>
            <Slider {...settings}>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business1.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business2.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business3.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business4.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business5.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business6.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business7.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business8.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business9.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
                {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
<>
                <div className="rounded-md px-2 md:p-10">
                    <img
                        
                        src={"/assets/business10.jpg"}
                        alt="hero" 
                        width={600}
                        height={600}
                        className="rounded-3xl"
                        />
                        </div> 
                        </>
            </Slider>
            
        </div>
    )
     
 }

 export default SliderOne