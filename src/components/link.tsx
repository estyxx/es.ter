import NextLink from "next/link";
import { LinkProps } from "next/link";

type Props = LinkProps & {
  target?: string;
  className?: string;
  children: React.ReactNode;
};
const Link = ({ className="", children, ...props }: Props): JSX.Element => {
  return (
    <NextLink {...props} className={`underline ${className}`}>
      {children}
    </NextLink>
  );
};
export default Link;
