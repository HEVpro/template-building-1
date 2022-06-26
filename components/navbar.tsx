import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Architecture from '../public/photos/Architecture.png'

export const links = [
  {name: "Home", href: '/#home'},
  {name: "About us", href: '/#about'},
  {name: "Products", href: '/#products'},
  {name: "Contact", href: '/#contact'},
]

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <nav className=" flex items-center justify-between bg-white w-full h-24 font-Merriweather ">
      <div className="ml-6">
        <Image
          src={Architecture}
          alt="Company logo"
          width={100}
          height={100}
        />
      </div>

      <div>
        <div className="flex justify-center text-lg ">
          {links.map((item, index) => (
              <button key={index} className="hidden lg:block lg:mx-5">
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end mr-10 text-xl">
        <button className="hidden lg:block lg:mx-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={() => menu ? setMenu(false) : setMenu(true)} className="block lg:hidden ">
          <FontAwesomeIcon icon={faBars} />
        </button>
        {menu && <Menu setMenu={setMenu}/>}
      </div>
    </nav>
  );
};
// onClick={() => setMenu(false)}
