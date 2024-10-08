import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/_components/Footer";
import { Inter } from "next/font/google";
import LogoComponent from "@/logo/LogoComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UnderConstruction from "@/_components/UnderConstruction";



const ThemeToggle = dynamic(() => import("../_components/themeToggle"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="emerald" lang="en" className="scroll-smooth snap-proximity snap-y min-w-screen-100">
      <body className={inter.className}>
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
            <section className="mb-4 dark:bg-base-100 bg-base-300">
              <UnderConstruction />
            </section>
            
            {/* Replace with this to see full site */}
            {/* <section className="mb-4">{children}</section> */}
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
        
        {/* This Div is required to get DaisyUI CSS to load properly, do not remove. */}
        <div className="toggle hidden"/>
        <Footer />
      </body>
    </html>
  );
}








// This is the old file

// import dynamic from "next/dynamic";
// const themeToggle = dynamic(() => import("../_components/themeToggle"), {
//   ssr: false,
// });

// import "./globals.css";
// import Footer from "@/_components/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <html data-theme="emerald" lang="en" className="scroll-smooth snap-proximity snap-y min-w-screen-100">
//       <body className={inter.className}>
        
//         <label className="flex cursor-pointer gap-2 justify-center pt-6  text-accent snap-start min-w-screen-100"> 
//          {themeToggle()}
//         </label>
//         <nav>
//           <div className="container mx-auto">
//             <div className="flex items-center justify-around dark:text-content ">
//               <a href="#" className="py-5 dark:hover:text-white">
//                 Home
//               </a>
//               <a href="#" className="py-5 dark:hover:text-white">
//                 Services
//               </a>
//               <a href="#" className="py-5 text-center ml-10 font-semibold dark:text-slate-200 dark:hover:text-white emerald:text-slate-900 emerald:hover:text-accent">
//                 <h1 className="text-4xl">FIRST NATIONS</h1>
//                 <h4 className="text-2xl">CONSULTING LLC</h4>
//               </a>
//               <a href="#" className="py-5 dark:hover:text-white">
//                 Warrior Games
//               </a>
//               <a href="#" className="py-5 dark:hover:text-white">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </nav>
//         <section className="mb-4">{children}</section>
//         {/* This Div is required too get DaisyUI CSS to load properly, do not remove. */}
//       <div className="toggle hidden"/>
//     <Footer />

//       </body>
      
//     </html>
//   );
// }
