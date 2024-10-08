import LogoComponent from "@/logo/LogoComponent";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <LogoComponent width="120px" height="auto" className="mb-6" />
          <p className="text-sm text-center max-w-md mb-8">
            First Nations Consulting LLC is dedicated to providing transparency and accountability with government contracting.
          </p>

        </div>
        <div className="pt-8 border-t border-base-content/20">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} First Nations Consulting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Old Footer
// import LogoComponent from "@/logo/LogoComponent";

// export default function Footer() {
//     return (
//         <footer className="footer min-w-screen-100 bg-slate-500 text-neutral-content items-center p-4">

//   <aside className="grid-flow-col items-center">
//     <LogoComponent width="8vw" height="100%" />
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//   <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//   </nav>
// </footer>
//     );
// }   