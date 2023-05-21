import NavMenu from './NavMenu';
import SideNav from './SideNav';

const NavContainer = ({ children }) => {
  return (
    <div className="flex flex-col divide-y w-screen max-h-screen overflow-hidden">
      <div>
        <NavMenu />
      </div>
      <div className="h-[calc(100vh - 50px)]">
        <SideNav>{children}</SideNav>
      </div>
    </div>
  );
};

export default NavContainer;
