import SideBarLogo from "./SideBarLogo";
import SideBarMenu from "./SideBarMenu";

export default function SideBar() {
    return (
      <>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
  
        <SideBarLogo />
  
        <SideBarMenu />
      </>
    );
  }