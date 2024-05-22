import React from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 [text-shadow:5px_5px_9px_black]">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium duration-200 hover:scale-95"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors duration-200 hover:scale-95"
        >
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium duration-200 hover:scale-95"
      >
        <a
          href="#AboutUs"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          About Us
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium duration-200 hover:scale-95"
      >
        <a
          href="#MyWorks"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          My Works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#Projects"
          className="flex items-center hover:text-green-500 transition-colors duration-200 hover:scale-95"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#ContactUs"
          className="flex items-center hover:text-green-500 transition-colors duration-200 hover:scale-95"
        >
          Contact Us
        </a>
      </Typography>
    </ul>
  );
}

export function NavListMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 border-2 border-gray-300 ">
        <div className="flex items-center justify-between text-blue-gray-900 text-xl">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Banu Design
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavListMenu;
