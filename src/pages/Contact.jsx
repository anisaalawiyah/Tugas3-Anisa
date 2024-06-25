import { Instagram, Facebook, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-stone-300 flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-sky-600 hover:bg-emerald-600">
          <Instagram size={32} />
        </a>
        <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-sky-600 hover:bg-indigo-400">
          <Facebook size={32} />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-sky-600 hover:bg-teal-600">
          <Twitter size={32} />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-sky-600 hover:bg-lime-500">
          <Github size={32} />
        </a>
      </div>
    </div>
  );
}
