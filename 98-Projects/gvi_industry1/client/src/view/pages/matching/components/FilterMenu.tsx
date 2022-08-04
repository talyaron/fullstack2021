import { useState, useEffect } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import axios from "axios";
import Mentor from "../../mentor/Mentor";

const FilterMenu = (props: any) => {
  const { checked, setChecked, filterOptions, setFilterOptions, setUsersList,setCurrentUser,currentUser} = props;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-filter");
      const { result } = data;
      setFilterOptions(result);
      console.log(result);
    })();
  }, []);
  
 async function HandleClick(){
  try {
    
    const {data} = await axios.get('/api/users/get-user')
    const {user} = data;
    console.log(user);
    setCurrentUser(user)
    handleGetUsers(currentUser)

  } catch (error) {
    console.error(error);
  }
 }

 async function handleGetUsers(currentUser:any){
  try {
    const { data } = await axios.post("/api/users/get-users", { currentUser, });
    const{filterUsers} = data;
    console.log(filterUsers);
    
    // setUsersList(filterUsers);
  } catch (error) {
    console.error(error)
  }
 }


  async function handleOnChange(ev: any) {
    // setChecked(!checked);
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked`, { checkedField, checked })
    const { allChecked } = data;
    setUsersList(allChecked)

  }










  return (
    <div className="matching__filter-menu">
      <div className="_section">
        <div className="_title"></div>
        <div className="_more">
          <Accordion>
            <AccordionSummary>
              <Typography>Sector</Typography>
            </AccordionSummary>
            <button onClick={HandleClick}>My Matching</button>
            <AccordionDetails>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {filterOptions.map((option: any, i: any) => (
                  <ListItemButton disableGutters>
                    {/* <Checkbox onChange={handleOnChange} checked={checked} /> */}
                    {/* <input type="checkbox" id={option.sector} onClick={handleOnChange} />{option.sector} */}
                    <button id={option.sector} key={i} onClick={handleOnChange} >{option.sector}</button>
                    {/* <ListItemText key={i} primary={option.sector} /> */}
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
