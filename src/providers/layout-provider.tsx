import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default LayoutProvider;
