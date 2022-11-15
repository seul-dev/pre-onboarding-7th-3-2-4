import React from "react";
import { AiOutlineQuestionCircle as QuestionIcon } from "react-icons/ai";
import { MdNotificationsNone as NotificationIcon } from "react-icons/md";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header
      className={`flex items-center justify-between px-7 bg-white h-14 drop-shadow-sm`}
    >
      <h1 className={`items-start  text-black font-bold text-xl`}>{title}</h1>
      <div className={`flex flex-row text-gray2 w-32 justify-between`}>
        <span>개발</span>
        <QuestionIcon className={`text-2xl`} />
        <NotificationIcon className={`text-2xl`} />
      </div>
    </header>
  );
};

export default Header;

// page path에 따라서 네이게이션 바 색깔, header 타이틀
