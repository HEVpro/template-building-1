import Image from "next/image";
export const Description = () => {
  return (
    <div
      id="about"
      className=" flex flex-col lg:flex-row items-center justify-between px-14 py-10 "
    >
      <div className="">
        <h1 className="text-orangee text-xl lg:text-2xl   "> NEW ADVENTURE</h1>
        <h1 className="text-2xl font-serif font-bold  lg:text-6xl mt-4  ">
          The{" "}
          <b className="underline decoration-orangee underline-offset-4 decoration-4">
            Creative
          </b>{" "}
          Eye
        </h1>
        <div className={" text-left  mt-6 mr-10 lg:mx-1 sm:w-[70ch] lg:w-[60ch]"}>
          <p className=" font-Merriweather">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
            minima soluta deleniti odio quis eius voluptas dolore! Odio placeat ab
            totam et quaerat blanditiis laudantium aperiam accusantium, saepe
            culpa!
          </p>
        </div>
        <button className="border-2 border-gray-300 font-serif w-28 h-14 mt-6">
          <h1 className="justify-center">Explore</h1>
        </button>
      </div>

      <div className="mt-10">
        <Image width={650} height={650} src="/photos/house box.jpg" />
      </div>
    </div>
  );
};
