import { Avatar, InputBase, Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState , useEffect } from "react";
interface SearchProps {
  DynamicSearchStyling: any;
  AvatarStyling: any;
  SearchToggle: any;
  SearchAnchor: any;
  setSearchToggle: Function;
  setSearchAnchor: Function;
}
function Search(props: SearchProps) {
  const {
    DynamicSearchStyling,
    AvatarStyling,
    SearchToggle,
    SearchAnchor,
    setSearchToggle,
    setSearchAnchor,
  } = props;
  const [drawer, setDrawer] = useState();
  function handleOpenSearchDrawer(ev: any) {
    const button = ev.currentTarget.firstChild;
    const icon = ev.currentTarget;
    setSearchToggle(icon)

    // setSearchToggle(true);
    setSearchAnchor(button);
    icon.style.backgroundColor = "#E7F3FF";
    icon.style.color = "hsl(214, 89%, 52%)";

    console.dir(button);
  }

  return (
    <div style={DynamicSearchStyling} className="NavBar_left-search">
      <Avatar
        style={AvatarStyling}
        onClick={(ev) => handleOpenSearchDrawer(ev)}
      >
        <FontAwesomeIcon size="xs" icon="magnifying-glass" />
      </Avatar>
      <Drawer
        open={Boolean(SearchAnchor)}
        anchor={'left'}
        // onClose={setSearchToggle(!SearchToggle)}
      >
        <InputBase
          className="NavBar_left-search-input"
          style={{ width: "80%" }}
          placeholder="Search Facebook"
        />
      </Drawer>
    </div>
  );
}

export default Search;
