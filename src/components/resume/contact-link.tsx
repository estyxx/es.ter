import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const ContactLink = ({
  url,
  Icon,
  text,
}: {
  url: string;
  text: string;
  Icon: IconProp;
}): JSX.Element => {
  return (
    <Link href={url}>
      <div className="flex flex-row items-center justify-end">
        <div className="text-sm">{text}</div>
        &nbsp;
        <FontAwesomeIcon icon={Icon} size="sm" />
      </div>
    </Link>
  );
};
