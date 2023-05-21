const SideNav = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-50px)] py-4">
      <div className="grid grid-cols-[200px_minmax(1000px,_1fr)_0px] gap-0 h-full rounded-lg border-[#bd4143] border-2">
        <div className=" bg-[#bd4143] rounded-l-lg"></div>
        <div className="bg-[#fff] rounded-r-lg">{children}</div>
      </div>
    </div>
  );
};

export default SideNav;
