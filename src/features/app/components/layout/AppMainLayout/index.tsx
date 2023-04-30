"use client";

// React
import { FC, ReactNode, useEffect, useState } from "react";

// Guard
import AppPageGuard from "../../AppPagesGuard";

// Component
import { Navbar, Sidebar } from "./components";

interface AppMainLayoutProps {
  children: ReactNode;
}

const AppMainLayout: FC<AppMainLayoutProps> = ({ children, role }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="min-h-[100vh] bg-zinc-100">
      <div className="bg-white shadow-sm">
        <Navbar onMenuButtonClick={() => setShowSideBar((prev) => !prev)} />
      </div>

      <div className="grid-template">
        <div className="md:col-span-2 ">
          <Sidebar role={role} open={showSideBar} />
        </div>
        <div className="md:mt-20 mt-10 lg:col-span-10 md:col-span-6 col-span-4 lg:-ml-6">
          {children}
        </div>
      </div>
    </div>
  );
};

AppMainLayout.displayName = "AppMainLayout";

export default AppPageGuard(AppMainLayout);
