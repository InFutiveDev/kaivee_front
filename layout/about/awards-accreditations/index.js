import React, { useEffect, useState } from "react";
import AwardsAccreditaionBanner from "./AwardsAccreditaionBanner";
import IsoLogo from "assets/images/about/awards/iso-logo.webp";
import IcmrLogo from "assets/images/about/awards/icmr.webp";
import MsmeLogo from "assets/images/about/awards/msme2.webp";
import NablLogo from "assets/images/about/awards/nabl-logo.webp";
import redLogo from "assets/images/about/awards/red-cross.webp";
import skillLogo from "assets/images/about/awards/Skill-India.webp";
import Line from "assets/images/about/ourTeam/Line 304.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { GET_ALL_AWARD } from "redux/actions/homepage";
import { useRouter } from "next/router";

const AwardsAccreditaionLayout = () => {
  const dispatch = useDispatch();
  const [dataAwards, setDataAwards] = useState([]);
  const router = useRouter();

  const fetchAllAwards = async () => {
    const res = await dispatch(GET_ALL_AWARD());
    if (res?.success) {
      setDataAwards(res?.data);
    } else {
      setDataAwards([]);
    }
  };

  useEffect(() => {
    fetchAllAwards();
  }, []);

  return (
    <>
      <section>
        <div>
          <AwardsAccreditaionBanner />
        </div>
      </section>

      <div className="container bg-white pt-[70px]">
        <div className="pb-[70px]">
          <h2 className="text-black font-semibold lg:text-[24px] text-lg mb-[32px] font-source-pro">
            Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
            {/* Dynamic Awards from API */}
            {dataAwards?.map((item, index) => (
              <div
                onClick={() => router.push(`/about/award/${item?.url}`)}
                key={index}
                className="shadow-md rounded-2xl cursor-pointer"
              >
                <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
                  <Image width={200} height={200} className="object-fill h-36" src={item?.img} alt={item?.title} />
                </div>
                <div className="p-[24px]">
                  <p className="lg:text-[18px] h-[51px] line-clamp-2 text-[16px] font-semibold text-center font-source-pro">
                    {item?.title || ""}
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <Image width={280} height={10} alt="line" src={Line.src} />
                  </div>
                  <p className="text-secondary text-center line-clamp-3 text-[14px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Static Awards */}
            <div className="shadow-md rounded-2xl cursor-pointer">
              <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
                <Image width={250} height={250} className="object-fill h-36" src={IsoLogo} alt="ISO Award" />
              </div>
              <div className="p-[24px]">
                <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[16px] font-semibold text-center font-source-pro">
                  ISO Certification
                </p>
                <div className="flex justify-center items-center my-2">
                  <Image width={280} height={10} alt="line" src={Line.src} />
                </div>
                <p className="text-secondary text-center line-clamp-3 text-[14px]">
                  Recognized for our exceptional quality and standards.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-2xl cursor-pointer">
              <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
                <Image width={250} height={250} className="object-fill h-36" src={IcmrLogo} alt="ICMR Award" />
              </div>
              <div className="p-[24px]">
                <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[18px] font-semibold text-center font-source-pro">
                  ICMR Certification
                </p>
                <div className="flex justify-center items-center my-2">
                  <Image width={280} height={10} alt="line" src={Line.src} />
                </div>
                <p className="text-secondary text-center line-clamp-3 text-[14px]">
                  Approved by ICMR for research excellence.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-2xl cursor-pointer">
              <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
                <Image width={250} height={250} className="object-fill h-36" src={MsmeLogo} alt="MSME Award" />
              </div>
              <div className="p-[24px]">
                <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[18px] font-semibold text-center font-source-pro">
                  MSME Recognition
                </p>
                <div className="flex justify-center items-center my-2">
                  <Image width={280} height={10} alt="line" src={Line.src} />
                </div>
                <p className="text-secondary text-center line-clamp-3 text-[14px]">
                  Recognized as a leading MSME in healthcare.
                </p>
              </div>
            </div>
            <div className="shadow-md rounded-2xl cursor-pointer">
  <div className="pt-[10px] h-[350px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
    <Image width={250} height={250} className="object-fill h-48" src={NablLogo} alt="NABL Award" />
  </div>
  <div className="p-[24px]">
    <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[18px] font-semibold text-center font-source-pro">
      NABL Certification
    </p>
    <div className="flex justify-center items-center my-2">
      <Image width={280} height={10} alt="line" src={Line.src} />
    </div>
    <p className="text-secondary text-center line-clamp-3 text-[16px]">
      Accredited for laboratory excellence.
    </p>
  </div>
</div>

<div className="shadow-md rounded-2xl cursor-pointer">
  <div className="pt-[10px] h-[350px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
    <Image width={250} height={250} className="object-fill h-48" src={redLogo} alt="Red Cross Award" />
  </div>
  <div className="p-[24px]">
    <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[18px] font-semibold text-center font-source-pro">
      Red Cross Recognition
    </p>
    <div className="flex justify-center items-center my-2">
      <Image width={280} height={10} alt="line" src={Line.src} />
    </div>
    <p className="text-secondary text-center line-clamp-3 text-[16px]">
      Recognized for humanitarian contributions.
    </p>
  </div>
</div>

<div className="shadow-md rounded-2xl cursor-pointer">
  <div className="pt-[10px] h-[350px] items-center bg-[#F3F3F3] flex justify-center rounded-t-2xl">
    <Image width={250} height={250} className="object-fill h-48" src={skillLogo} alt="Skill India Award" />
  </div>
  <div className="p-[24px]">
    <p className="lg:text-[20px] h-[55px] line-clamp-2 text-[18px] font-semibold text-center font-source-pro">
      Skill India Recognition
    </p>
    <div className="flex justify-center items-center my-2">
      <Image width={280} height={10} alt="line" src={Line.src} />
    </div>
    <p className="text-secondary text-center line-clamp-3 text-[16px]">
      Recognized for skill development excellence.
    </p>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AwardsAccreditaionLayout;
