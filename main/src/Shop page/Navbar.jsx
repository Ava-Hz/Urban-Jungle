import React from "react";
import "./../App.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaXmark } from "react-icons/fa6";
import { GiShoppingBag, GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

import FooterIcon from "./../Home page/FooterIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(true);
  const [activePage, setActivePage] = useState("Home");

  const toggleBurgerToXmark = () => {
    setBurgerMenu(!burgerMenu);
  };

  {
    /* Navbar Items */
  }
  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "shop", label: "Shop", path: "/shop" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setBurgerMenu(true);
  };

  {
    /* When Scroll fade the navbar */
  }
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" text-black">
      <div className="w-full flex flex-cols-2 ">
        <Link
          to={"/"}
          className="flex flex-col justify-start items-start px-4 relative -top-10 md:-top-5"
        >
          <FooterIcon />
        </Link>

        <nav
          className={`fixed  w-full z-20 p-6 md:p-0 flex flex-col justify-end items-end transition-all duration-300 ${
            isAtTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          {/* Navbar for Big Screen */}

          <div className="hidden md:flex mt-8 mr-5 items-center">
            <ul className=" md:flex space-x-6 h2font">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 cursor-pointer text-black ${
                      activePage === item.id
                        ? "bg-green-500"
                        : "hover:underline"
                    } transition-colors duration-200 rounded-md`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <FaXTwitter className="hidden md:block mx-2 cursor-pointer mt-1 hover:opacity-20" />
            <FaInstagram className="hidden md:block mx-2 cursor-pointer mt-1 hover:opacity-20" />
            <FaFacebook className="hidden md:block mx-2 cursor-pointer mt-1 hover:opacity-20" />
            <FaYoutube className="hidden md:block mx-2 cursor-pointer mt-1 hover:opacity-20" />
            <GiShoppingBag className="hidden md:block md:mx-2 cursor-pointer md:mt-1 text-2xl hover:opacity-20 " />
          </div>

          {/* Burger menu / medium and small screen */}

          <button
            className="md:hidden fixed right-1 z-25 mt-2 cursor-pointer"
            onClick={toggleBurgerToXmark}
          >
            {burgerMenu ? (
              <GiHamburgerMenu className=" text-2xl" />
            ) : (
              <FaXmark color="Black" className="text-2xl" />
            )}
          </button>
          <div
            className={`fixed top-0 right-0 w-64 h-[100vh] bg-white text-black transform
              ${
                burgerMenu
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }
              transition-all duration-300 ease-in-out  flex flex-col py-10 pr-5 justify-start items-center md:hidden
                `}
          >
            <ul className="w-full text-black">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`py-2 cursor-pointer text-center ${
                    activePage === item.id
                      ? "bg-green-500 text-white"
                      : "hover:bg-gray-200"
                  } transition-colors duration-200`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
              <GiShoppingBag
                color="black"
                className="fixed top-0 left-0 text-4xl cursor-pointer hover:opacity-20 md:hidden"
              />
            </ul>
          </div>
        </nav>
      </div>
      <div className="shop-bg text-white text-7xl">
        <div className="z-20 h1font text-bold">Shop</div>
      </div>
    </div>
  );
};

export default Navbar;
