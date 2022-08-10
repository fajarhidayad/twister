import React from "react";

const SideNav = () => {
  return (
    <aside className="hidden md:block col-span-1">
      <section className="sticky top-5">
        <div className="card mb-5">
          <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
            Trends for you
          </h2>
          <ul className="flex flex-col items-center">
            <li className="text-slate-600">No Trend Yet</li>
          </ul>
        </div>
        <div className="card mb-5">
          <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
            Recommend follow
          </h2>
          <ul className="flex flex-col items-center">
            <li className="text-slate-600">No People Yet</li>
          </ul>
        </div>
        <div className="text-sm px-3 text-slate-600">
          &copy; {new Date().getFullYear()} Twister App, Fajar Hidayad. Design
          by{" "}
          <a href="http://devchallenges.io" className="hover:underline">
            @devchallenges.io
          </a>
        </div>
      </section>
    </aside>
  );
};

export default SideNav;
