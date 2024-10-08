

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faPersonRifle,
  faPenRuler,
  faUserSecret,
  faLaptopCode,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="snap-y h-screen overflow-y-scroll">
      <section className="snap-start min-h-screen bg-base-100 w-full lg:w-5/6 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={"/Truck_Driving.jpg"}
              alt="Truck Driving"
              className="object-cover w-full h-64 lg:h-auto lg:w-1/2 max-w-lg mb-10 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl lg:text-6xl max-w-md-lg font-bold dark:text-white text-base-content">
                Re<span className="text-primary">imagine</span> the world of
                Government Contracting
              </h1>
              <p className="pt-6 lg:pt-10 text-lg">
                Blah blah blah this is some filler text{" "}
                <span className="dark:text-white text-accent-content font-bold">
                  that will be changed.
                </span>{" "}
                No more short sentences, no more tiny text. We are here to
                bring{" "}
                <span className="dark:text-white text-accent-content font-bold">
                  transparency{" "}
                </span>
                and{" "}
                <span className="dark:text-white text-accent-content font-bold">
                  accountability
                </span>{" "}
                to the world of government contracting.
              </p>
              <a href="/services" className="btn dark:text-white btn-primary btn-wide text-xl shadow-2xl mt-6 lg:mt-10 w-full lg:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start min-h-screen bg-accent w-full lg:w-5/6 lg:ml-auto mt-20">
        <div className="flex min-h-screen py-10 px-4">
          <div className="mx-auto max-w-screen-lg text-center">

            <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">
             Proud Supporters
            </h1>
            <div className="max-w-xl mx-auto mt-10 py-10">
              <img
                src="/WarriorGamesLogo.webp"
                alt="Department of Defense Warrior Games Logo"
                className="w-full"
              />
            </div>
            <h1 className="text-white mb-4 text-3xl lg:text-4xl font-extrabold tracking-tight leading-none dark:text-white">
              Get the latest information
            </h1>
            <p className="mb-8 text-base lg:text-lg font-normal text-accent-content dark:text-accent-content">
              The Department of Defense Warrior Games is an annual event that
              brings together wounded, ill and injured service members and
              veterans from the U.S. Army, Marine Corps, Navy, Air Force, Space
              Force, and Special Operations Command to compete in a variety of
              adaptive sports.
            </p>
            <a href="/warrior-games" className="text-xl btn btn-neutral btn-wide btn-lg w-full lg:w-auto">
              Check it out
            </a>
          </div>
        </div>
      </section>

      <section className="snap-start sm:min-h-screen lg:min-h-0 bg-primary w-full lg:w-5/6 mt-20">
<div className="my-auto">
      <h1 className="text-white pt-20 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white text-center">
              What We Offer
            </h1>
            </div>

        <div className="px-4 min-h-screen flex flex-wrap justify-around items-center">
          
          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faTruckFast}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Logistics</h2>
              <p>Comprehensive nationwide logistics, covering all 50 states with a focus on efficiency, reliability, and seamless coordination.</p>
            </div>
          </div>

          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faPersonRifle}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Security</h2>
              <p>From personal security details to high-level asset protection, our security services ensure the safety and confidentiality of individuals and property.</p>
            </div>
          </div>

          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faPenRuler}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Development</h2>
              <p>
              Our team supports your project from concept to completion, offering design, engineering, and manufacturing solutions tailored to meet your specific needs.
              </p>
            </div>
          </div>

          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faUserSecret}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Discretion</h2>
              <p>
              Specialized in covert operations, including investigative, surveillance, and security services, ensuring your objectives are achieved with discretion and confidentiality.
              </p>
            </div>
          </div>

          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faLaptopCode}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Cost Efficiency</h2>
              <p>
              We excel at providing high-quality services within budget constraints, delivering superior results without the excessive costs typically associated with our competitors.
              </p>
            </div>
          </div>

          <div className="card card-compact bg-secondary-content w-full sm:w-64 shadow-xl mb-6">
            <figure>
              <FontAwesomeIcon
                className="w-24 h-24 mb-2 pt-6 dark:text-slate-400 text-primary"
                icon={faHandshake}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-white">Consulting</h2>
              <p>
              With expertise in government contracting and regulatory compliance, we offer strategic consulting services to guide your operations to success while minimizing risks.
              </p>
            </div>
          </div>
          <a href="/services" className="btn btn-neutral-content btn-wide btn-lg w-full lg:w-auto text-xl"> Explore Our Services</a>
          
        </div>
      </section>
    </main>
  );
}


// Old Home Page

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTruckFast,
//   faPersonRifle,
//   faPenRuler,
//   faUserSecret,
// } from "@fortawesome/free-solid-svg-icons";


// export default function Home() {
//   return (
//     <main className="snap-y grid grid-cols-5 gap-4 static">
//       <section className="snap-start hero min-h-full bg-base col-span-5 static">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img
//             src={"/Truck_Driving.jpg"}
//             alt="Truck Driving"
//             className="object-cover w-full h-full lg:w-1/2 max-w-lg mb-10 rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 className="text-5xl max-w-md-lg font-bold dark:text-white text-base-content">
//               Re<span className="text-primary">imagine</span> the world of
//               Government Contracting
//             </h1>
//             <p className="pt-10 ">
//               In a world of regulations and greed,{" "}
//               <span className="dark:text-white text-accent-content font-bold">
//                 we are changing the game.
//               </span>{" "}
//               No more backroom deals, no more shady contracts. We are here to
//               bring{" "}
//               <span className="dark:text-white text-accent-content font-bold">
//                 transparency{" "}
//               </span>
//               and{" "}
//               <span className="dark:text-white text-accent-content font-bold">
//                 accountability
//               </span>{" "}
//               to the world of government contracting.
//             </p>
//             <button className="btn dark:text-white btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-wide shadow-2xl mt-10 mr-40 float-right">
//               {" "}
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       <div className="col-span-5 dark:text-accent dark:opacity-100 text-accent relative  z-10 bottom-20 opacity-100 max-w-40 mx-auto pt-20 pb-0">
//     {/* This is an additional spacer */}
//       </div>

//       <section className="col-span-4 snap-start">
//         <div className="flex min-h-screen  bg-accent py-10 shadow-2xl">
//           <div className="px-4 mx-auto max-w-screen-lg pr-20 text-center ">
//             <div className="opacity-100 max-w-xl mx-auto mt-10 py-10">
//               <img
//                 src="/WarriorGamesLogo.webp"
//                 alt="Department of Defense Warrior Games Logo"
//               />
//             </div>
//             <h1 className="text-white mb-4 text-4xl font-extrabold tracking-tight leading-none dark:text-white md:text-5xl lg:text-6xl">
//               Get the latest information
//             </h1>
//             <p className="mb-8 text-lg font-normal text-accent-content dark:text-accent-content lg:text-xl sm:px-16 lg:px-48 ">
//               The Department of Defense Warrior Games is an annual event that
//               brings together wounded, ill and injured service members and
//               veterans from the U.S. Army, Marine Corps, Navy, Air Force, Space
//               Force, and Special Operations Command to compete in a variety of
//               adaptive sports.
//             </p>
//             <button className="btn btn-neutral btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">
//               Check it out
//             </button>
//           </div>
//         </div>
//       </section>


//       <section className=" min-h-100 bg-primary py-10 gap-4 col-start-2 col-span-4 snap-start flex flex-wrap justify-around">
//         <div className="card card-compact bg-secondary-content max-w-48 shadow-xl flex-initial max-h-80">
//           <figure>
//             <FontAwesomeIcon
//               className="max-w-36 max-h-36 mb-2 pt-6 dark:text-slate-400 text-primary"
//               icon={faTruckFast}
//             />
//           </figure>

//           <div className="card-body">
//             <h2 className="card-title dark:text-white">Logistics</h2>

//             <p>We offer Nationwide logistical services across all 50 states</p>
//           </div>
//         </div>

//         <div className="card card-compact bg-secondary-content max-w-48 shadow-xl flex-initial">
//           <figure>
//             <FontAwesomeIcon
//               className="max-w-36 max-h-36 mb-2 pt-6 dark:text-slate-400 text-primary"
//               icon={faPersonRifle}
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title dark:text-white">Security</h2>

//             <p>Our services range from Personal Security to Asset Protection</p>
//           </div>
//         </div>
//         <div className="card card-compact bg-secondary-content max-w-48 shadow-xl flex-initial">
//           <figure>
//             <FontAwesomeIcon
//               className="max-w-36 max-h-36 mb-2 pt-6 dark:text-slate-400 text-primary"
//               icon={faPenRuler}
//             />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title dark:text-white">Development</h2>

//             <p>
//               We have the capability to help you from the design phase all the
//               way to manufacturing
//             </p>
//           </div>
//         </div>

//         <div className="card card-compact bg-secondary-content max-w-48 shadow-xl flex-initial">
//           <figure>
//             <FontAwesomeIcon
//               className="max-w-36 max-h-36 mb-2 pt-6 dark:text-slate-400 text-primary"
//               icon={faUserSecret}
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title dark:text-white">Discretion</h2>

//             <p>
//               Covert operations, including investigative and security operations
//               are available
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


    {/* <section className="min-h-100 bg-primary py-10 gap-4 col-start-2 col-span-4 snap-start flex flex-wrap justify-around">
      <Services />
      </section> */}