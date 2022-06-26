import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Menu = ({setMenu}) => {
  return (
    <div className="absolute flex z-30 right-0 top-20 ">
      <ul className="flex-col bg-white  text-right flex  rounded-bl-[70px] drop-shadow-2xl w-44 h-64 ">
        <div className="font-semibold p-4 ">
          <button onClick={() => setMenu(false)} className="text-3xl text-right text-orangee">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <li className="">
            <button>
              <Link href="/#home">
                <a className=" text-orangee">HOME</a>
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link href="/#pages">
                <h1>PAGES</h1>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/#products">
                <h1>PRODUCTS</h1>
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link href="/#contact">
                <h1>CONTACT US</h1>
              </Link>
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};
//  id= nombre sin almoadilla
