"use client"
import SliderOne from "@/components/hero/slider";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import GraphicDesign from "../components/services/graphic-design";
import LegacyCode from "@/components/services/legacy-code";
import ServiceList from "@/components/services/service-list";
import ShopifyStores from "@/components/services/shopify-stores";
import { Spotlight } from "@/components/ui/spotlight";
import Services from "@/components/services/services";
import FrequentAskedQuestions from "@/components/faq/faq";
import { useRef } from "react";
import Pricing from "@/components/pricing/pricing";
import Head from "next/head";
import ChatbaseChatbot from "@/components/eunny-chatbot";


export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const serviceListRef = useRef<HTMLDivElement>(null);
  const legacyCodeRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  const scrollToServiceList = () => {
    serviceListRef.current?.scrollIntoView({behavior: "smooth"});
  }
  const scrollToLegacyCode = () => {
    legacyCodeRef.current?.scrollIntoView({behavior: "smooth"});
  }
  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({behavior: "smooth"});
  }
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({behavior: "smooth"});
  }
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({behavior: "smooth"});
  }

  

  return (
    <>
<Head>
  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    dangerouslySetInnerHTML={{
      __html: `(function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="sKLuRxfnOKKFHHrV-UdmB";
          script.domain="www.chatbase.co";
          document.body.appendChild(script)
        };
        if(document.readyState==="complete"){
          onLoad()
        }else{
          window.addEventListener("load",onLoad)
        }
      })();`,
    }}
  ></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Expert web design & development with PHP, Laravel, React, Next.js & more. We build full projects, no-code sites & AI assistants. Elevate your digital presence!" />
  <meta name="keywords" content="The First Pitch" />
</Head>

     <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar 
        scrollToWebDesign={scrollToWebsiteDesign}
        scrollToServiceList={scrollToServiceList}
        scrollToLegacyCode={scrollToLegacyCode}
        scrollToPricing={scrollToPricing}
        // biome-ignore lint/complexity/useArrowFunction: <explanation>
        scrollToShopifyStores={scrollToShopifyStores} scrollToServices={function (): void {
          throw new Error("Function not implemented.");
        } }        />


        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <Spotlight className="hidden md:flex md:-top-80 left-20  " fill="white" />
            Partner with us for<br /> an immeasurable growth!
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-400 max-w-2xl text-center mx-auto px-4">Since 2013, we&apos;ve been dedicated to delivering top-tier software and web solutions, empowering businesses with cutting-edge technology. It all starts with The First Pitch.</p>
          <Link href={"/book"}
          className="cursor-pointer justify-center flex items-center border rounded-full w-48 mx-auto my-6  h-12 animate-shimmer border-sky-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50"
          >
            Book A Call
          </Link>

          <div className="w-full">
            <SliderOne  />
            <div ref={websiteDesignRef}><GraphicDesign /></div>
            <div ref={serviceListRef}><ServiceList /></div>
            <div ref={legacyCodeRef}><LegacyCode /></div>
            <div ref={shopifyStoresRef}><ShopifyStores /></div>
            <div ref={servicesRef}><Services /></div>
            <div ref={pricingRef}><Pricing /></div>
          <FrequentAskedQuestions />
          <ChatbaseChatbot />
          </div>
        </div>
     </div>
     </>
  );
}
  