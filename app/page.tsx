import SliderOne from "@/components/hero/slider";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import GraphicDesign from "../components/services/graphic-design";
import LegacyCode from "@/components/services/legacy-code";
import ServiceList from "@/components/services/service-list";
import ShopifyStores from "@/components/services/shopify-stores";


export default function Home() {
  return (
     <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar />
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md-pt-18 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg--neutral-400 bg-opacity-50">
            Partner with us <br /> for immeasurable growth!
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-400 max-w-2xl text-center mx-auto px-4">Since 2013, we&apos;ve been dedicated to delivering top-tier software and web solutions, empowering businesses with cutting-edge technology. It all starts with The First Pitch.</p>
          <Link href={"/book"}
          className="cursor-pointer justify-center flex items-center border rounded-full w-48 mx-auto my-6  h-12 animate-shimmer border-sky-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50"
          >
            Book A Call
          </Link>

          <div className="w-full">
            <SliderOne />
            <GraphicDesign />
            <ServiceList />
            <LegacyCode />
            <ShopifyStores />
          </div>
        </div>
     </div>
  );
}
  