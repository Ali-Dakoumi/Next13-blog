import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export const NavItem = ({ items }) =>
  items.map(({ link, link_text }, i) => {
    return (
      <Link href={`/${link.uid}`} key={i}>
        {link_text}
      </Link>
    );
  });
