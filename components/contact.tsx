import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-center items-center bg-gray-100 lg:px-20 py-10 w-full   "
    >
      <div className=" my-10 px-12 text-center lg:text-left font-Merriweather">
        <div className=" flex flex-col leading-10  lg:px-9 text-left">
          <p className="text-5xl  font-serif underline decoration-orangee underline-offset-8 decoration-4">
            Contact
          </p>
          <span className="mt-10 text-lg ">
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
           Address: 87 City Walls Rd, Clophill, Mk45 1eu
          </span>
          <span>
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
           Email: email@studioblue.com
          </span>
          <span>
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            Tlf: 345 20 14 00
          </span>
        </div>
      </div>
      <iframe
        className="w-80 h-96  ml-0 lg:ml-10  lg:my-0 lg:mt-0 lg:w-[35.5rem] lg:h-[24.1rem] sm:w-[35.5rem] sm:h-[24.1rem]   "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.085562819117!2d2.1624647435913054!3d41.389912236208836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f996716c83%3A0x16f6112475e15883!2sCatedral%20de%20Barcelona!5e0!3m2!1ses!2ses!4v1652201718255!5m2!1ses!2ses"
      ></iframe>
    </div>
  );
};
export default Contact;
