import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import { useState } from "react";

const defaultIconSize = "1.875rem";

const items = [
  { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
  {
    label: " Movies",
    icon: <BiMoviePlay size={defaultIconSize} />,
  },
  {
    label: "About",
    icon: <BiInfoCircle size={defaultIconSize} />,
  },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex mx-4 justify-between items-center md:block">
        <h4 className="text-2xl uppercase font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultIconSize}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <ul className={`mx-4 my-2 ${isMenuOpen ? "" : "hidden"} md:block`}>
        {items.map((item, index) => (
          <li
            className={`flex p-2 justify-end items-center cursor-pointer 
            ${item.active ? "bg-primary text-white" : ""} 
            `}
            key={index}
          >
            <h3 className="text-3xl mr-2">{item.label}</h3>
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
