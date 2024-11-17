import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideBarHeader() {
  return (
    <>
      <Link href={"/"}>
        <Image src={"/dark-logo.svg"} alt="" width={200} height={0} />
      </Link>
    </>
  );
}

export default SideBarHeader;
