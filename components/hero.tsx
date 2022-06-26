import Bathroom from '../public/photos/bathroom.jpg'
import Image from "next/image";
export const Hero = () => {
  return (
    <div id="home" className="relative w-full ">
      <Image
        width={1920}
        height={875}
        src={Bathroom}
        className="z-0 absolute top-0  left-0"
      />
      <div className="bg-black opacity-50 absolute top-0 left-0 z-10 w-full lg:h-[99%] sm:h-[98%] h-[97%]"></div>
      <div className="flex  items-center justify-between  absolute top-0 left-0 w-full z-20 ">
        <div className="text-white font-serif z-20 mt-10 ml-6  sm:mt-12 lg:ml-[8rem] lg:w-[110ch]">
          <h1 className=" text-4xl w-[13ch] sm:text-7xl  lg:text-8xl">
            The Simple Way Of Architecture
          </h1>
        </div>
        <div className="hidden md:flex  font-serif absolute z-20 rotate-90 right-0 top-72 w-[60ch] ">
          <h1 className="text-white text-xl   ">
            Interior Desing From the
            <p className="text-orangee font-serif"> India.</p>
          </h1>
          <div className=" border-white border-t-4 m"></div>
        </div>
      </div>
    </div>
  );
};
