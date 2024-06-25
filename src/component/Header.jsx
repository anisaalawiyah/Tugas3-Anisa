import { House, Info ,CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-500 p-4 shadow-lg text-white">
      <div className="flex w-1/2 items-center gap-1">
        <h1 className="text-xl font-bold">Daftar Mahasiswa Pub</h1>
      </div>
      <nav className="flex w-1/2">
        <ul className="w-full flex justify-evenly">
          <li className="flex items-center gap-2">
            <House className="text-white" />
            <Link to="/" className="hover:text-yellow-200 transition-colors duration-300">Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <Info className="text-white" />
            <Link to="/about" className="hover:text-yellow-200 transition-colors duration-300">About</Link>
          </li>
          <li className="flex items-center gap-2">
            <CircleUserRound  className="text-white" />
            <Link to="/contact" className="hover:text-yellow-200 transition-colors duration-300">Contact</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
