import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  MenuIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
function Header() {
  return (
    // shadow-sm gives shadow at the bottom,sticy is used to stick the nav at the top -0
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      {/* mx-auto center items */}
      <div className="flex justify-between max-w-6xl mx-5 md:mx-auto">
        {/* Left */}
        {/* Larger screen logo */}
        <div className="relative hidden md:inline-grid w-24 cursor-pointer">
          <Image
            loading="lazy"
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Smaller screen logo */}
        <div className="relative  w-10 md:hidden flex-shrink-0 cursor-pointer ">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle --> Custom Search inpur bar*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10  sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute  -top-1 -right-4 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="data:image/jpeg;base64,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"
            alt="profile-picture"
            className="h-6 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
