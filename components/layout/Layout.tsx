import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getToken } from "../../lib/util/tokenStorage";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if (!token) router.replace("/");
  }, [router]);

  return (
    <div className={`w-full flex h-screen`}>
      <Sidebar />
      <div className={`w-full`}>
        <Header title={title} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
