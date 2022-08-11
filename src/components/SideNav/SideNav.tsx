import React from "react";

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav = ({ children }: SideNavProps) => {
  return (
    <aside className="col-span-1">
      <ul className="md:sticky md:top-10 bg-white rounded-lg py-3 pr-3 shadow pl-0 mb-5 space-y-3">
        {children}
      </ul>
    </aside>
  );
};

export default SideNav;
