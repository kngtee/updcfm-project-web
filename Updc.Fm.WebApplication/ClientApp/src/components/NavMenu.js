import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { MdNotifications, MdSettings, MdExitToApp } from "react-icons/md";
import "./NavMenu.css";
import ProfilePic from "../assets/profilepic.png";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true,
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }

  render() {
    return (
      <header className="">
        <div className="flex items-center justify-between px-8 py-4">
          <NavLink
            tag={Link}
            className="font-bold text-lg text-[#a73439] hover:text-[#bd4143]"
            to="/"
          >
            FACILITY MANAGER
          </NavLink>

          <div className="flex flex-row space-x-0">
            <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full ">
              <NavLink tag={Link} className="" to="/">
                Admin
              </NavLink>
            </div>
            <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full">
              <NavLink tag={Link} className="" to="/counter">
                Account
              </NavLink>
            </div>
            <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full">
              <NavLink tag={Link} className="" to="/fetch-data">
                Sales
              </NavLink>
            </div>
          </div>

          <div className="flex flex-row space-x-3">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20">
              <NavLink tag={Link} className="" to="/">
                <MdNotifications />
              </NavLink>
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20">
              <NavLink tag={Link} className="" to="/">
                <MdSettings />
              </NavLink>
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20">
              <NavLink tag={Link} className="" to="/login">
                <MdExitToApp />
              </NavLink>
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-white shadow-md shadow-rose-500/20">
              <img
                src={ProfilePic}
                className="w-8 h-8 rounded-full"
                alt="profile pic"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!this.state.collapsed}
            navbar
          >
            <ul className="">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">
                  Counter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">
                  Fetch data
                </NavLink>
              </NavItem>
            </ul>
          </Collapse> */}
      </header>
    );
  }
}
