import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map, Tag } from "lucide-react";

export default function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-black/5 bg-white/95 p-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link to="/stores" className="flex items-center justify-center gap-2 rounded-full bg-[#007BB5] py-3.5 font-semibold text-white">
        <Map className="h-5 w-5" /> Directions
      </Link>
      <Link to="/promotions" className="flex items-center justify-center gap-2 rounded-full bg-[#E65100] py-3.5 font-semibold text-white">
        <Tag className="h-5 w-5" /> View Flyer
      </Link>
    </div>
  );
}