import { images } from "@/images/images";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
    const { hero, strike } = images();
    return (
        <section className="w-[1416px] mx-auto grid grid-cols-[48%_48%] justify-between mt-[170px]">
            <div>
                <p className="text-[#2B788B] text-[19px] font-[500]">
                    E-COURSE PLATFORM
                </p>
                <h1 className="text-[73px] font-[800] leading-[80px] mt-[21px] mb-[30px]">
                    Learning and teaching online, made easy.
                </h1>
                <p className="text-[#585858] text-[22px] font-[500]">
                    Gain subject certification or earn money while teaching
                    online with GlobalTalk.
                </p>
                <div className="mt-[30px] flex gap-[18px]">
                    <a href="" className="text-[19px] self-center font-[500]">
                        Sign In
                    </a>
                    <button className="bg-[#C3DCE3] text-[#2B788B] font-[700] rounded-[17px] text-[19px] border-none py-[13px] px-[26px]">
                        Learn more
                    </button>
                </div>

                <div className="flex gap-[40px] mt-[30px]">
                    <div>
                        <div className="flex gap-[8px]">
                            <Image src={strike} alt="" />
                            <p className="text-[40px] font-[800]">700+</p>
                        </div>
                        <p className="text-[#585858] text-center">Hours of content</p>
                    </div>
                    <div>
                        <div className="flex gap-[8px]">
                            <Image src={strike} alt="" />
                            <p className="text-[40px] font-[800]">575K+</p>
                        </div>
                        <p className="text-[#585858] text-center">Active Users</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <Image src={hero} alt="" />
            </div>
        </section>
    );
}
