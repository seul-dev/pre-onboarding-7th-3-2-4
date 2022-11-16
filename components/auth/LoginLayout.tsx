import React, { useEffect } from "react";
import Image from "next/image";

import Logo from "lib/assets/Logo.png";
import Footer from "../layout/Footer";
import { getToken } from "../../lib/util/tokenStorage";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
const LoginLayout = ({ children }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if (token) router.replace("/accounts");
  }, [router]);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-gray1`}
    >
      <div className={`flex flex-row items-center`}>
        <Image
          src={Logo}
          alt="logo"
          width={60}
          height={60}
          className={`rounded-lg`}
        />
        <h1 className={`text-5xl text-navy font-bold ml-3`}>PREFACE</h1>
      </div>
      <section
        className={`w-96 p-7 mt-10 mb-4 rounded-md drop-shadow-md bg-gray3`}
      >
        <h2 className={`font-bold text-black text-xl mb-3`}>로그인</h2>
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default LoginLayout;
