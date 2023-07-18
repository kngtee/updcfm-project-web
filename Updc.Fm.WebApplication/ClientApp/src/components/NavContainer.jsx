import NavMenu from './NavMenu';
import SideNav from './SideNav';

const NavContainer = ({ children, dashboard }) => {
  return (
    <div className="flex flex-col w-screen max-h-screen overflow-hidden">
      <div>
        <NavMenu />
      </div>
      <div className="h-screen">
        <SideNav dashboard={dashboard}>{children}</SideNav>
      </div>
    </div>
  );
};

export default NavContainer;
