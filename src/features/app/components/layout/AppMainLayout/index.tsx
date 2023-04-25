"use client";

import { FC, ReactNode, useState } from "react";
import AppPageGuard from "../../AppPagesGuard";
import { Navbar, Sidebar } from "./components";

interface AppMainLayoutProps {
  children: ReactNode;
}

const AppMainLayout: FC<AppMainLayoutProps> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="min-h-[100vh] bg-zinc-100">
      <div className="bg-white shadow-sm">
        <Navbar onMenuButtonClick={() => setShowSideBar((prev) => !prev)} />
      </div>

      <div className="grid md:grid-cols-6 ">
        <Sidebar open={showSideBar} />
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
};

AppMainLayout.displayName = "AppMainLayout";

export default AppPageGuard(AppMainLayout);
