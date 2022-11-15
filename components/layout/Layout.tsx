import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`w-full flex h-screen`}>
      <Sidebar />
      <div className={`w-full`}>
        <Header title="투자계좌" />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
