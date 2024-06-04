import { Link, NavLink, Outlet } from "react-router-dom";
import DarkModeToggleButton from "../buttons/DarkModeToggleButton";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import PersonIcon from "../icons/PersonIcon";
import DocumentIcon from "../icons/DocumentIcon";
import CubeIcon from "../icons/CubeIcon";
import AddressIcon from "../icons/AddressIcon";
import MainCard from "../blocks/MainCard";
import Header from "../header/Header";

function PageLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <PersonIcon /> },
    { name: "Resume", path: "/resume", icon: <DocumentIcon /> },
    { name: "Works", path: "/works", icon: <CubeIcon /> },
    { name: "Contact", path: "/contact", icon: <AddressIcon /> },
  ];

  function toggleMenuOpen() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <section className="min-h-screen w-full bg-home bg-cover bg-fixed bg-center bg-no-repeat dark:bg-home-dark md:pb-16">
      <div className="container flex w-full justify-between bg-[#f3f6f6] py-5 dark:bg-black lg:bg-transparent lg:px-0 lg:pt-[50px] lg:dark:bg-transparent">
        <div className="flex w-full justify-between px-4">
          <Link to={"/"}>
            <h2 className="gradient-text text-6xl font-extrabold tracking-tight">
              My Portfolio
            </h2>
          </Link>

          <div className="flex items-center">
            <DarkModeToggleButton
              lightClassName="lg:w-[50px] lg:h-[50px] flex justify-center items-center"
              darkClassName="bg-[#4d4d4d] lg:w-[50px] lg:h-[50px] flex justify-center items-center"
            />

            <span
              onClick={toggleMenuOpen}
              className={`ml-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white ${isMenuOpen ? "visible opacity-100 lg:invisible lg:opacity-0" : "dark:text-white lg:hidden"}`}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </div>
        </div>
      </div>

      <nav className={`${isMenuOpen ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${isMenuOpen ? "absolute left-0 top-20 z-50 block w-full rounded-b-[20px] bg-white shadow-md dark:bg-[#1d1d1d]" : "my-12 flex"}`}
        >
          {menuItems.map((item) => (
            <li key={item.name} onClick={closeMenu}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  const className = `flex cursor-pointer items-center py-2.5 font-poppins text-xtiny font-medium transition-colors duration-300 ease-in-out md:px-4 xl:px-5 ${isMenuOpen ? "pl-4" : "mx-2.5 rounded-md"}`;

                  return `${className} ${isActive ? "text-[#fa5252] hover:text-[#fa5252]" : "text-gray-lite hover:text-[#fa5252] dark:text-white dark:hover:text-[#fa5252]"}`;
                }}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px]">
        <div className="sticky top-44 col-span-12 hidden h-screen lg:col-span-4 lg:block">
          <MainCard />
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Header>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => {
                  const className =
                    "mx-2.5 flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] font-poppins text-xtiny font-medium transition-all duration-300 ease-in-out";

                  return `${className} ${isActive ? "bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white" : "text-gray-lite hover:bg-gradient-to-r hover:from-[#fa5252] hover:to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white"}`;
                }}
              >
                <span className="mb-1 text-xl">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </Header>

          <section>
            <div className="bg-white dark:bg-[#111111] lg:rounded-2xl">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default PageLayout;
