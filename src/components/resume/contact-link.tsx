import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export const ContactLink = ({
  url,
  Icon,
  text,
}: {
  url: string;
  text: string;
  Icon: IconType;
}): JSX.Element => {
  return (
    <Link href={url}>
      <div className="flex flex-row items-center justify-end">
        <div className="text-sm">{text}</div>
        &nbsp;
        <Icon />
      </div>
    </Link>
  );
};
