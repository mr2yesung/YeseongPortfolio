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
    <section className="bg-home dark:bg-home-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div className="container w-full bg-[#f3f6f6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
        <div className="w-full flex justify-between px-4">
          <Link to={"/"}>
            <h2 className="gradient-text font-extrabold text-6xl tracking-tight">
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
              className={`bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 ${isMenuOpen ? "visible opacity-100 lg:opacity-0 lg:invisible" : "lg:hidden dark:text-white"}`}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </div>
        </div>
      </div>

      <nav className={`${isMenuOpen ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${isMenuOpen ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-white dark:bg-[#1d1d1d]" : "flex my-12"}`}
        >
          {menuItems.map((item) => (
            <li key={item.name} onClick={closeMenu}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  const className = `cursor-pointer transition-colors duration-300 ease-in-out font-poppins text-xtiny font-medium flex items-center py-2.5 md:px-4 xl:px-5 ${isMenuOpen ? "pl-4" : "mx-2.5 rounded-md"}`;

                  return `${className} ${isActive ? "text-[#fa5252] hover:text-[#fa5252]" : "text-gray-lite dark:text-white dark:hover:text-[#fa5252] hover:text-[#fa5252]"}`;
                }}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
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
                    "w-full h-20 rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out font-poppins bg-[#f3f6f6] font-medium mx-2.5 text-xtiny flex flex-col justify-center items-center";

                  return `${className} ${isActive ? "text-white bg-gradient-to-r from-[#fa5252] to-[#dd2476]" : "text-gray-lite hover:text-white hover:bg-gradient-to-r hover:from-[#fa5252] hover:to-[#dd2476] dark:text-[#a6a6a6] dark:bg-[#212425] dark:hover:text-white"}`;
                }}
              >
                <span className="text-xl mb-1">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </Header>

          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default PageLayout;
