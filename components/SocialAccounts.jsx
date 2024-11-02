import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const SocialAccounts = () => {
  return (
    <>
      <Link
        className="text-white social-links"
        href="https://www.facebook.com/profile.php?id=61558607846597&mibextid=LQQJ4d"
        target="_blank"
      >
        <FacebookRounded sx={{ fontSize: "2rem" }} />
      </Link>
      <Link
        href="https://www.instagram.com/_sayan_kd_/profilecard/?igsh=MTNsaHVrZmg0ZGF5eQ=="
        className="text-white social-links"
        target="_blank"
      >
        <Instagram sx={{ fontSize: "2rem" }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sayan-kumar-das-755386243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        className="text-white social-links"
        target="_blank"
      >
        <LinkedIn sx={{ fontSize: "2rem" }} />
      </Link>
      <Link
        href="tel:8617284931"
        className="text-white social-links"
        target="_blank"
      >
        <WhatsApp sx={{ fontSize: "2rem" }} />
      </Link>
    </>
  );
};

export default SocialAccounts;
