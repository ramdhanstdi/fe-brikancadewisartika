import AppBaseLabel from "@/features/app/components/base/AppBaseLabel";
import { FaBars } from "react-icons/fa";

const Navbar = ({ onMenuButtonClick }) => {
  return (
    <nav className="bg-white text-zinc-700 flex items-center w-full fixed z-10 px-12 -mt-4 shadow-sm h-20">
      <div className="w-[100px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <FaBars className="h-6 w-6" />
      </button>
    </nav>
  );
};

export { Navbar };
