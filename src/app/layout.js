import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/_components/Footer";
import Menu from "@/_components/Menu";
import { Inter } from "next/font/google";



const ThemeToggle = dynamic(() => import("../_components/themeToggle"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="emerald" lang="en" className="scroll-smooth snap-proximity snap-y min-w-screen-100">
      <body className={inter.className}>
        <Menu children={children} />
        
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
