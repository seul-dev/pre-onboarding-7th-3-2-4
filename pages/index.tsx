import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import LoginLayout from "../components/auth/LoginLayout";

export default function Home() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}
