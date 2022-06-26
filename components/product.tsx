import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  {
    icon: faHouseFlag,
    title: "Home Locations",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faLayerGroup,
    title: "Structure",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faDoorClosed,
    title: "Move in Now",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faShieldHalved,
    title: "Home Security",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
];

export const Product = () => {
  return (
    <div className="flex flex-col items-center justify-around bg-black w-full py-12 sm:flex-row">
      {products.map((product, index) => {
        return (
          <div key={index} className="flex flex-col items-center  ">
            <div
              id="products"
              className="flex items-center justify-center  bg-orangee rounded-full w-16 h-16 lg:h-20 lg:w-20"
            >
              <FontAwesomeIcon
                className="text-2xl text-white"
                icon={product.icon}
              />
            </div>
            <div className="mt-2 flex items-center justify-center text-center  text-2xl font-serif ">
              <h1 className=" text-orangee font-medium">{product.title}</h1>
            </div>
            <div className="flex items-start  text-center justify-center  w-[24ch] sm:w-[14ch] lg:w-[20ch] font-Merriweather mb-4">
              <span className="text-gray-300 text-md sm:text-sm">{product.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
