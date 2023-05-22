import NavMenu from './NavMenu';
import SideNav from './SideNav';

const NavContainer = ({ children, dashboard }) => {
  return (
    <div className="flex flex-col divide-y w-screen max-h-screen overflow-hidden">
      <div>
        <NavMenu />
      </div>
      <div className="h-[calc(100vh - 50px)]">
        <SideNav dashboard={dashboard}>{children}</SideNav>
      </div>
    </div>
  );
};

export default NavContainer;
