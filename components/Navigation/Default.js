import { PrismicNextLink } from "@prismicio/next";
import {Link} from "../MUI/Proxy/index"

export const NavItem = ({ items }) => (
  items.map(({ link, link_text }, i) => (
      <Link padding="1rem" underline="hover" color="inherit" href={link.slug} key={i} >{link_text}</Link>
  ))
);
