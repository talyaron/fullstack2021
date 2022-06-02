import { Avatar, Collapse, InputBase, Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
interface SearchProps {
  DynamicSearchStyling: any;
  AvatarStyling: any;
  SearchToggle: any;
  width: number;
  height: number;
  setMounted: Function;
  setSearchToggle: Function;
  searchTerm: any;
  setSearchTerm: Function;
  searchMenuToggle: any;
  setSearchMenuToggle: Function;
  handleSearchResult:Function;
}
function Search(props: SearchProps) {
  const {
    DynamicSearchStyling,
    AvatarStyling,
    SearchToggle,
    setSearchToggle,
    width,
    height,
    setMounted,
    searchTerm,
    setSearchTerm,
    searchMenuToggle,
    setSearchMenuToggle,
    handleSearchResult
  } = props;
  const [drawer, setDrawer] = useState();
  

  function handleOpenSearchDrawer(ev: any) {
    const button = ev.currentTarget.firstChild;
    const icon = ev.currentTarget;
    setSearchToggle(!SearchToggle);

    // setSearchToggle(true);
    icon.style.backgroundColor = "#E7F3FF";
    icon.style.color = "hsl(214, 89%, 52%)";

    console.dir(button);
  }
  function handleCloseSearchDrawer(ev: any) {
    const button = ev.currentTarget.firstChild;
    const icon = ev.currentTarget;
    console.log(button);
    console.log(icon);

    setSearchToggle(!SearchToggle);

    // setSearchToggle(true);
    icon.style.backgroundColor = "#e3e6ea";
    icon.style.color = "#050505";

    console.dir(button);
  }
  function handleSearchMenu(ev: any) {
    setSearchTerm(ev.target.value);
    handleSearchResult(ev)
  }

  
  
  useEffect(() => {
    let w = document.documentElement.clientWidth;
    // let h = document.documentElement.clientHeight;

    if (w < 1265) {
      setMounted(true);
    }
    if (w > 1265) {
      setMounted(false);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setSearchMenuToggle(true);
    } else {
      setSearchMenuToggle(false);
      // console.log(searchTerm.length);
    }
  }, [searchTerm]);
  return (
    <div style={DynamicSearchStyling} className="NavBar_left-search">
      <Avatar
        style={AvatarStyling}
        onClick={(ev) => {
          width < 1256
            ? handleCloseSearchDrawer(ev)
            : handleOpenSearchDrawer(ev);
        }}
      >
        <FontAwesomeIcon size="xs" icon="magnifying-glass" />
      </Avatar>
      <Collapse orientation="horizontal" in={SearchToggle === true}>
        <InputBase
          className="NavBar_left-search-input"
          style={{ width: "80%" }}
          placeholder="Search Facebook"
          onKeyUp={(ev) => handleSearchMenu(ev)}
          onKeyPress={(ev: any) => {
            if (ev.key === "Enter") {
              handleSearchResult(ev);
            }
          }}
        />
      </Collapse>
    </div>
  );
}

export default Search;
