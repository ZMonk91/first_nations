import ThemeToggle from "./themeToggle"
import LogoComponent from "@/logo/LogoComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Menu({children = []}) {
   children = children || [];

    return (
<div className="drawer bg-base-300">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="hidden lg:flex justify-center py-4">
              <ThemeToggle />
            </div>
            <div className="navbar bg-base-100 lg:hidden">
              <div className="flex-1">
                <div className="mx-5">
                  <LogoComponent width="8vw" height="100%" /> 
                </div>
                <a href="#" className="font-semibold dark:text-slate-200 dark:hover:text-white emerald:text-slate-900 emerald:hover:text-accent">
                  <h1 className="text-2xl">FIRST NATIONS</h1>
                  <h4 className="text-xl">CONSULTING LLC</h4>
                </a>
              </div>
              <div className="flex-none">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                  <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                </label>
              </div>
            </div>
            <nav className="hidden lg:flex justify-center py-4">
              <ul className="menu menu-horizontal px-1 items-center">
                <li><a href="/" className="dark:hover:text-white">Home</a></li>
                <li><a href="/services" className="dark:hover:text-white">Services</a></li>
                <li className="mx-8">
                  <a href="#" className="font-semibold dark:text-slate-200 dark:hover:text-white emerald:text-slate-900 emerald:hover:text-accent text-center">
                    <h1 className="text-4xl">FIRST NATIONS <br/>
                    <span className="text-2xl">CONSULTING LLC</span>
                    </h1> 
                  </a>
                </li>
                <li><a href="/warrior-games" className="dark:hover:text-white">Warrior Games</a></li>
                <li><a href="/contact" className="dark:hover:text-white">Contact Us</a></li>
              </ul>
            </nav>
            <section className="mb-4">{children}</section>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
              <li><a href="/" className="dark:hover:text-white">Home</a></li>
              <li><a href="/services" className="dark:hover:text-white">Services</a></li>
              <li><a href="/warrior-games" className="dark:hover:text-white">Warrior Games</a></li>
              <li><a href="/contact" className="dark:hover:text-white">Contact Us</a></li>
              <li className="mt-auto">
                <div className="flex justify-center py-4">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </div>
        </div>
)}