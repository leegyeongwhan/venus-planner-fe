import AlertButton from "./AlertButton";
import HomeButton from "./HomeButton";
import SearchBar from "./SearchBar";
import SideBarToggle from "./SideBarToggle";
import UserInfoButton from "./UserInfoButton";

export default function Header() {
  return (
    <div className="text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
      <div className="navbar bg-base-200">
        {/* Open/Close Sidebar */}
        <div className="navbar-start">
          <SideBarToggle />
          <HomeButton />
        </div>

        {/* Center */}
        <div className="navbar-center"></div>

        {/* Search Bar & Alert & User Info */}
        <div className="navbar-end gap-1">
          <SearchBar />
          <AlertButton />
          <UserInfoButton />
        </div>
      </div>
    </div>
  );
}
