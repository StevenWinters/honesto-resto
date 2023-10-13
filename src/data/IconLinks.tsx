import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

export const iconLinks = [
  {
    id: 1,
    icon: <AiOutlineInstagram size={25} color={"var(--color-secondary)"} />,
    path: "https://www.instagram.com/mypwu_official/",
  },
  {
    id: 2,
    icon: <BiLogoFacebook size={25} color={"var(--color-secondary)"} />,
    path: "https://www.facebook.com/PWU.OfficialFanpage/",
  },
  {
    id: 3,
    icon: <AiOutlineTwitter size={25} color={"var(--color-secondary)"} />,
    path: "https://twitter.com/PWU_Manila?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    id: 4,
    icon: <AiFillYoutube size={25} color={"var(--color-secondary)"} />,
    path: "https://www.youtube.com/c/philippinewomensuniversitymanilaofficial",
  },
];
