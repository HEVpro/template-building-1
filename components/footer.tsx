import {links} from "./navbar";
import Link from "next/link";

export const Footer = () => {
  return (
    <div id="footer" className="bg-black w-full h-56 ">
      <div className="text-center flex justify-center my-14">
        {links.map((footer, index) => (
            <Link key={index} href={footer.href}>
                <a className="text-gray-300 lg:text-2xl sm:text-2xl text-l mx-2 lg:mx-10">
                    {footer.name}
                </a>
            </Link>
        ))}
      </div>
      <div className="text-gray-300 flex justify-center">
        <h1>© 2022 HEVProjects. All rights reserved.</h1>
      </div>
    </div>
  );
};
