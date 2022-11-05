import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ContactLink } from "components/resume/contact-link";
import React from "react";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex items-center gap-4 ">
        <div className="flex print:hidden">
          <Image
            src="/foto.profilo.1.png"
            alt=""
            className="w-32 rounded-full"
            width="500"
            height="500"
          />
        </div>
        <div className="">
          <div className="flex flex-row mb-1">
            <div className="text-4xl font-bold">Ester</div>&nbsp;
            <div className="text-4xl ">Beltrami</div>
          </div>
          <div className="text-gray-400 uppercase">
            Full Stack Web Developer
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <ContactLink
          url="mailto:beltrami.ester@gmail.com"
          text="beltrami.ester@gmail.com"
          Icon={solid("envelope")}
        />
        <ContactLink
          url="https://www.linkedin.com/in/beltramiester"
          text="linkedin.com/in/beltramiester"
          Icon={brands("linkedin")}
        />
        <ContactLink
          url="https://github.com/estyxx"
          text="github.com/estyxx"
          Icon={brands("github")}
        />
        <ContactLink
          url="https://twitter.com/esterbeltrami"
          text="@esterbeltrami"
          Icon={brands("twitter")}
        />
      </div>
    </div>
  );
};
