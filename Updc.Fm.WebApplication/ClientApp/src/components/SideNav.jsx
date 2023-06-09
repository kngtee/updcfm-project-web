const SideNav = ({ children, dashboard }) => {
  const overview = dashboard.overview;
  const manage = dashboard.manage;
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-50px)] py-4">
      <div className="grid grid-cols-[200px_minmax(1000px,_1fr)_0px] gap-0 h-full rounded-lg border-[#bd4143] border-2">
        <div className=" bg-[#bd4143] pl-5">
          <div className="h-[12rem]">
            <div className="mt-7 mb-3 mr-7 px-3 py-2 text-[#fff] text-medium border-b-[2px]">
              {overview.title}
            </div>
            {overview.navs.map((task, index) => (
              <div
                className="bg-[#fff] py-2 px-3 rounded-l-lg text-[#bd4143] font-medium"
                key={task.name}
              >
                {task.name}
              </div>
            ))}
          </div>
          <div>
            <div className="mt-7 mb-3 mr-7 px-3 py-2 text-[#fff] text-medium border-b-[2px]">
              {manage.title}
            </div>
            {manage.navs.map((nav, index) => (
              <div
                className="py-2 px-3 rounded-l-lg text-[#fff] font-medium"
                key={nav.path}
              >
                <a href={nav.path}>{nav.name}</a>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bg-[#fff] rounded-r-lg px-8">{children}</div> */}
        <div className="bg-gray rounded-r-lg px-8">{children}</div>
      </div>
    </div>
  );
};

export default SideNav;
