import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-yellow-300">Voracity MC</h1>
        <ul className="flex gap-8 text-lg text-yellow-300">
          <li className="hover:bg-yellow-300 hover:text-black py-2.5 px-4 rounded-md cursor-pointer hover:scale-105">
            Home
          </li>
          <li className="hover:bg-yellow-300 hover:text-black py-2.5 px-4 rounded-md cursor-pointer hover:scale-105">
            About
          </li>
          <li className="hover:bg-yellow-300 hover:text-black py-2.5 px-4 rounded-md cursor-pointer hover:scale-105">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
