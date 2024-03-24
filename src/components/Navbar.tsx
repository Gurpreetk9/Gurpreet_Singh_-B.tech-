import { Link } from "react-router-dom";
import "./Navbar.scss";
import { menuItemsArray, moreItemsArray } from "../MenuItems";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth as number);
  const [menuItems, setMenuItems] = useState(menuItemsArray as string[]);
  const [moreItems, setMoreItems] = useState(moreItemsArray as string[]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    updateMenu();
  }, [windowWidth]);

  const updateMenu = () => {
    let newMenuItems: string[] = [];
    let newMoreItems: string[] = [];
    if (windowWidth < 1000 && windowWidth > 650) {
      if (menuItems.length == 3) {
        newMenuItems = moreItems.slice(7);
        newMoreItems = moreItems.slice(0, 7);

        setMenuItems([...menuItems, ...newMenuItems]);
        setMoreItems(newMoreItems);
      } else {
        newMenuItems = menuItems.slice(0, 5);
        newMoreItems = menuItems.slice(5);

        setMenuItems(newMenuItems);
        setMoreItems([...moreItems, ...newMoreItems]);
      }
    } else if (windowWidth >= 1000) {
      newMenuItems = moreItems.slice(5);
      newMoreItems = moreItems.slice(0, 5);

      setMenuItems([...menuItems, ...newMenuItems]);
      setMoreItems(newMoreItems);
    } else if (windowWidth < 650) {
      newMenuItems = menuItems.slice(0, 3);
      newMoreItems = menuItems.slice(3);

      setMenuItems(newMenuItems);
      setMoreItems([...moreItems, ...newMoreItems]);
    }
  };

  return (
    <>
      <div id="navbar">
        <Link id="logo" to="/">
          E-COMM
        </Link>

        <div id="menu">
          {menuItems.map((item: string, index: number) => (
            <Link
              id="menuId"
              className="menuItem menuShowItem"
              to={`/${item}`}
              key={index}
            >
              {item}
            </Link>
          ))}
          <div className="dropdown">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="menuItem"
              id="more"
            >
              {`More ˅`}
            </div>
            {showDropdown && (
              <div className="dropdown-content">
                {moreItems.map((item: string, index: number) => (
                  <Link className="menuItem" to={`/${item}`} key={index}>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="searchBar">
          <input type="text" placeholder={"🔎 Search Something"} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
