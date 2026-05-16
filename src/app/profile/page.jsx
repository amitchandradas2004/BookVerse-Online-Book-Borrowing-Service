import Image from "next/image";
import ImageProfile from "@/Assets/not-found-image.png";
const MyProfilePage = () => {
  return (
    <div className="mt-20 flex flex-col justify-center bg-slate-200  border border-slate-300 container mx-auto w-[80%] md:w-[50%] lg:w-[40%] h-110 md:h-90 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-102">
      <div className="text-center space-y-3 h-full py-10 px-5">
        <Image
          src={ImageProfile}
          alt={"profile"}
          height={150}
          width={150}
          className="mx-auto rounded-full border border-slate-400 shadow-xl select-none"
        />
        <h3 className="text-3xl">
          Name: <span className=" font-bold">Amit Chandra Das</span>
        </h3>
        <p className="text-xl">
          Email: <span className="font-medium">acdamit@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default MyProfilePage;
