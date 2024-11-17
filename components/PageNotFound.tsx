import Link from "next/link";
import React from "react";
import { CiWarning } from "react-icons/ci";

function PageNotFound({ text = "Page Not-Found", link = "/" }) {
  return (
    <section className="flex place-content-center mt-80 h-full">
      <div className="w-6/12 h-64 flex flex-col items-center justify-center gap-2 bg-slate-100 shadow text-center rounded">
        <CiWarning className="h-20 w-20" />
        <h3 className="font-bold text-xl">{text}</h3>
        <Link
          href={link}
          className="font-bold text-lg text-white bg-green-400 rounded w-36 text-center px-3 py-2"
        >
          Home
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
