import React from "react";
import Navbar from "../components/Navbar";
const CommonLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='bg-gray-900 pt-[7rem]'>{children}</div>
    </div>
  );
};

export default CommonLayout;
