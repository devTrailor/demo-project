import AppFooter from "@/components/footer";
import AppHeader from "@/components/header";
import React from "react";

const LayoutPrimary = ({ children }) => {
  return (
    <main className="app-main">
      <AppHeader />
      <div className="main-content">{children}</div>
      <AppFooter />
    </main>
  );
};

export default LayoutPrimary;
