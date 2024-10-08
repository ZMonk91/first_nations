import LogoComponent from "@/logo/LogoComponent";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <LogoComponent width="150px" height="auto" />
          </div>
          <div className="md:text-right">
            <div className="mb-4">
              <p className="text-sm">
                First Nations Consulting LLC is dedicated to bringing transparency and accountability to government contracting.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-2">
                Contact
              </h3>
              <address className="not-italic text-sm">
                <p>Phone: (227) 213-9266</p>
                <p>Email: Info@FirstNationsLLC.com</p>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400 text-center">
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