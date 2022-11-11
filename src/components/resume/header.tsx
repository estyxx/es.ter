import { ContactLink } from "components/resume/contact-link";
import Image from "next/image";
import React from "react";
import { FaPython } from 'react-icons/fa';
import { FaEnvelope, FaGithub, FaLinkedin, FaReact,FaTwitter } from "react-icons/fa"
import { GrGraphQl } from 'react-icons/gr'
import { SiDjango,SiNextdotjs , SiTypescript} from 'react-icons/si'
export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row justify-between ">
      <div className="md:flex items-center gap-4 ">
        <div className=" print:hidden">
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
          <div className="flex flex-row gap-2 text-gray-400">
            <FaPython/>
            <SiDjango/>
            <GrGraphQl/>
            <FaReact/>
            <SiNextdotjs/>
            <SiTypescript />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4 md:mt-0 ">
        <ContactLink
          url="mailto:beltrami.ester@gmail.com"
          text="beltrami.ester@gmail.com"
          Icon={FaEnvelope}
        />
        <ContactLink
          url="https://www.linkedin.com/in/beltramiester"
          text="linkedin.com/in/beltramiester"
          Icon={FaLinkedin}
        />
        <ContactLink
          url="https://github.com/estyxx"
          text="github.com/estyxx"
          Icon={FaGithub}
        />
        <ContactLink
          url="https://twitter.com/esterbeltrami"
          text="@esterbeltrami"
          Icon={FaTwitter}
        />
      </div>
    </div>
  );
};
