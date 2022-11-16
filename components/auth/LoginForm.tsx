import React from "react";
import Button from "./Button";
import useInput from "./hook/useInput";
import { useRouter } from "next/router";
import Input from "./Input";
import { api } from "../../lib/api";
import { setToken } from "../../lib/util/tokenStorage";
import { AxiosError } from "axios";

const LoginForm = () => {
  const router = useRouter();
  const { userInput, handleInputChange, isValidated } = useInput();
  const { email, password } = userInput;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", {
        email,
        password
      });
      setToken(data.accessToken);
      router.push("/accounts");
    } catch (error) {
      if (error instanceof AxiosError) {
        //tostify
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="email"
        type="text"
        name="email"
        placeholder="아이디를 입력하세요"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        label="password"
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={handleInputChange}
      />
      <Button type="submit" disabled={!isValidated()}>
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
