import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ekawich-turawan/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Akewich",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/ekawich.turawan",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/ekawich04s",
  },
];

const Social = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
