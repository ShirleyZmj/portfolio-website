import React from "react";

export default function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-32 xs:p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 ${className}`}
    >
      {children}
    </div>
  );
}
