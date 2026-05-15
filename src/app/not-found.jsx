import Image from "next/image";

import NotFoundImage from "@/Assets/not-found-image.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { robotoslab } from "./layout";
import Link from "next/link";
const notFoundPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 items-center h-screen select-none">
      <div>
        <Image
          src={NotFoundImage}
          alt="Not-Found-Image"
          height={280}
          width={280}
          className="mx-auto"
        />
      </div>
      <div className="space-y-3 h-50 text-center md:text-left">
        <h3 className="{robotoslab} font-bold text-3xl">Oops!</h3>
        <p>We could not find the page you were looking for</p>
        <span className="flex justify-center md:justify-start">
          {" "}
          <Link href={"/"}>
            {" "}
            <button className="flex btn rounded-full btn-neutral">
              <FaArrowLeftLong />
              Go Home
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default notFoundPage;
