import HomeButton from "./HomeButton";
import NavbarRoute from "./NavbarRoute";

export default function Navbar() {
  return (
    <div className="static w-[calc(100vw-1rem)] h-16 flex bg-white rounded-lg m-2 p-5 justify-center">
      <HomeButton />
      <ul className="flex gap-9">
        <NavbarRoute text="Overview" href="google.com" />
        <NavbarRoute text="Examples" href="google.com" />
        <NavbarRoute text="Tour" href="google.com" />
        <NavbarRoute text="Blog" href="google.com" />
        <NavbarRoute text="Help" href="google.com" />
      </ul>
      <button className="w-24 h-8 absolute top-6 right-7 text-white rounded-full bg-green-400 font-sans  hover:opacity-70 focus:border-2 focus:border-green-900">
        Download
      </button>
    </div>
  );
}
