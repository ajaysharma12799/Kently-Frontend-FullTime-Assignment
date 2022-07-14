import Image from "next/image"
import KlentyLogo from '../assets/KlentyLogo.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
        <div className="flex items-center w-[65%]">
            <div className="">
                <Image src={KlentyLogo} alt="Klenty" className="w-40 cursor-pointer" />
            </div>
            <div className="hidden md:block">
                <ul className="flex text-[#5856ce] text-[16px] font-semibold">
                    <li className="ml-5 cursor-pointer">Platform</li>
                    <li className="ml-5 cursor-pointer">Pricing</li>
                    <li className="ml-5 cursor-pointer">Acceleration</li>
                    <li className="ml-5 cursor-pointer">Resources</li>
                    <li className="ml-5 cursor-pointer">Customer Stories</li>
                </ul>
            </div>
        </div>
        <div className="flex items-center">
            <p className="text-[#05034E] font-semibold cursor-pointer hidden md:block">Log in</p>
            <div className="flex items-center ml-5">
                <button type="submit" className="border-2 border-[#5856CE] text-[#5856CE] px-[16px] py-[12px] uppercase rounded-lg hidden md:block">schedule demo</button>
                <button type="submit" className="bg-[#5856CE] text-[#ffffff] px-[10px] md:px-[16px] py-[12px] uppercase border-2 border-[#5856ce] ml-0 md:ml-2 rounded-lg">try for free</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar