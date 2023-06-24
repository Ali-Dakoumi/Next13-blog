import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export const NavItem = ({ items }) => (
  items.map(({ link, link_text }, i) => (
    <Link href={link.slug}
      key={i}
      className="flex-none text-lg font-semibold text-gray-800 lg:text-gray-500 hover:text-gray-900 transition duration-200 hover:underline"
    >
      {link_text}
    </Link>
  ))
);
