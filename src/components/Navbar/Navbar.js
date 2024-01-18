import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/FP log.png";
import { userLoggedOut } from "../../features/auth/authSlice";
import useAuth from "../../hooks/useAuth";
import NavbarCategory from "./NavbarCategory/NavbarCategory";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const authChecked = useAuth();
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  const signOut = () => {
    localStorage?.removeItem("auth");
    dispatch(
      userLoggedOut({
        token: undefined,
        user: undefined,
      })
    );
    naviagate("/signin");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 600) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative shadow-md">
      <header
        className={`${
          hasScrolled
            ? "bg-white z-20 fixed top-0 w-full transition-transform translate-y-0 duration-200 shadow-lg"
            : ""
        }`}
      >
        <nav
          className={`mx-auto h-24 flex max-w-7xl items-center justify-between p-8 lg:px-8  `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/">
              <img src={logo} alt="" className="h-[90px] " />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <div className="flex gap-3 items-center">
              {/* first */}
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <div className="text-lg font-medium hover:text-deep-purple-500 hover:cursor-pointer">
                    Courses
                  </div>
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <NavbarCategory />
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              {/* second */}
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <div className="text-lg font-medium hover:text-deep-purple-500 hover:cursor-pointer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3z1FtTdriea_p8EHVNlWcf9xTWfoYEadB3jTINw&s"
                      className="h-10 w-10 rounded-full"
                      alt=""
                    />
                  </div>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-1 top-full z-10 mt-3  w-48 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div
                      className="group relative flex items-center gap-x-5 rounded-lg p-2 text-md leading-6
                         hover:text-blue-700"
                    >
                      <Link
                        to="/profile"
                        className="text-lg  hover:bg-gray-300 w-full p-1 rounded-sm"
                      >
                        Profile
                      </Link>
                    </div>
                    <div
                      className="group relative flex items-center gap-x-5 rounded-lg p-2 text-md leading-6
                         hover:text-blue-700"
                    >
                      <Link
                        to="/orders"
                        className="text-lg  hover:bg-gray-300 w-full p-1 rounded-sm"
                      >
                        Orders
                      </Link>
                    </div>
                    <div
                      className="group relative flex items-center gap-x-5 rounded-lg p-2 text-md leading-6
                         hover:text-blue-700 "
                    >
                      {authChecked && (
                        <button
                          className="border-2 px-5 py-1 border-deep-purple-500 text-lg font-semibold hover:text-white hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                          color="purple"
                          onClick={signOut}
                        >
                          <span>Sign Out</span>
                        </button>
                      )}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              {!authChecked && (
                      <Link
                        to="/signin"
                        className="border-2 px-5 py-1 border-deep-purple-500 text-lg font-semibold hover:text-white hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                      >
                        Sign In
                      </Link>
                    )}
            </div>
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <img src={logo} alt='logo' className="" />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className=" flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="text-base font-medium hover:text-deep-purple-700 hover:cursor-pointer py-5 ">
                    Why Future Prodigy?
                  </div>
                  <hr />
                  <div className="text-base font-medium  hover:text-deep-purple-700 hover:cursor-pointer py-5">
                    Student Success
                  </div>
                  <hr />
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          Courses
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          <NavbarCategory />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6 flex gap-9 items-center justify-center">
                  <div className="text-lg font-medium hover:text-deep-purple-700 hover:cursor-pointer">
                    {!authChecked && (
                      <Link
                        to="/signin"
                        className="border-2 px-5 py-1 border-deep-purple-500 text-lg font-semibold hover:text-white hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                      >
                        Sign In
                      </Link>
                    )}
                    {authChecked && (
                      <button
                        className="border-2 px-5 py-1 border-deep-purple-500 text-lg font-semibold hover:text-white hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                        color="purple"
                        onClick={signOut}
                      >
                        <span>Sign Out</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
