import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Link } from "react-router-dom";
import { classNames } from "../../utils/utils";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "login" },
];



const TopBar = () => {
  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form className="relative flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
          aria-hidden="true"
        />

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <MenuButton className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                aria-hidden="true"
              >
                Tom Cook
              </span>
              <ChevronDownIcon
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                {({ focus }) => (
                  <Link
                    to={item.href}
                    className={classNames(
                      focus ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
