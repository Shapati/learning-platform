import React from "react";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-[1416px] mx-auto mt-[30px]">
            <div className="flex gap-[52px]">
                <h2 className="font-[700] text-[24px] self-center">
                    GlobalTalk
                </h2>
                <div className="self-center text-[19px] gap-[16px] flex">
                    <a href="">Main</a>
                    <a href="">Guide</a>
                    <a href="">Statistics</a>
                    <a href="">Games</a>
                </div>
            </div>
            <div className="self-center flex gap-[16px]">
                <a href="" className="text-[19px] self-center">
                    Login →
                </a>
                <button className="bg-[#2B788B] text-white rounded-[17px] text-[19px] border-none py-[13px] px-[26px]">
                    Sign up
                </button>
            </div>
        </nav>
    );
}
