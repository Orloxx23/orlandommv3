import React from "react";
import { useTranslation } from "react-i18next";

export default function EnglishCard() {
  const [t, i18n] = useTranslation("global");
  
  return (
    <a
      href="https://www.efset.org/cert/Y5Zk3T"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white relative rounded-3xl flex overflow-hidden aspect-square shadow-sm bg-[#2ab9adb9] p-4 justify-center items-center hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
    >
      <i className="fa-solid fa-arrow-up-right-from-square absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa]"></i>
      <div className="">
        {/* <Image src={birthday} alt="" width="100" /> */}
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs hidden md:block md:text-lg text-center uppercase font-base">
            {t("certificates.enlvl")}
          </p>
          <p className="text-4xl md:text-9xl font-bold">B2</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            EF SET
          </p>
        </div>
        {/* <p className="text-sm hidden md:flex">{`${getBirthday()} ${t("birthday.time")}`}</p> */}
      </div>
    </a>
  );
}
