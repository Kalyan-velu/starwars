import React from "react";

const CommonLayout = ({ children }: { children: React.ReactElement }) => {
  return <div className='h-[calc(100vh-5rem)] mt-[5rem]'>{children}</div>;
};

export default CommonLayout;
