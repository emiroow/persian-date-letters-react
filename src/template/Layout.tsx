import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="drawer">
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full max-lg:hidden navbar bg-base-300 p-5">
          <div className="flex-1 p-2 mx-2 font-bold text-xl">
            Persian date to letters
          </div>
          <span className="p-2 mx-2">v 1.0.0</span>
        </div>
        {/* Page content here */}
        <>{children}</>
        <div className="w-full text-center mt-5 mb-8">
          <span className="text-sm ">Good Luck 👋</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
