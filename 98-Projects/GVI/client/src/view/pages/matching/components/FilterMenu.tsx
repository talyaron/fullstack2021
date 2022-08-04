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
  const { checked, setChecked, filterOptions, setFilterOptions, setUsersList, setCurrentUser, currentUser } = props;
  const [fieldsOptions, setFieldsOptions] = useState([]);
////////////// sector filter options
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-sector");
      const { result } = data;
      setFilterOptions(result);
      console.log(result);
    })();
  }, []);


/////////// fieldOfKnowledge filter options
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-field");
      const { result } = data;
      setFieldsOptions(result);
     
    })();
  }, []);
  ////////////////////////////////////////the click gets the info about the current users and activates a function that brings all the matchings for the user (default page)
  async function handleClick() {
    try {

      const { data } = await axios.get('/api/users/get-user')
      const { user } = data;
      setCurrentUser(user)
      handleGetUsers(currentUser)

    } catch (error) {
      console.error(error);
    }
  }
  ////////////////////// brings all of the user best matching (default page)
  async function handleGetUsers(currentUser: any) {
    try {
      const { data } = await axios.post("/api/users/get-users", { currentUser, });
      const { filterUsers } = data;
      console.log(filterUsers);

      setUsersList(filterUsers);
    } catch (error) {
      console.error(error)
    }
  }

  /////////// brings the filtered array of users
  async function handleOnChangeSector(ev: any) {
    // setChecked(!checked);
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-sector`, { checkedField, })
    const { allChecked } = data;
    setUsersList(allChecked)

  }

  async function handleOnChangeField(ev: any) {
    // setChecked(!checked);
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-field`, { checkedField, })
    const { allChecked } = data;
    setUsersList(allChecked)

  }




 





  return (
    <div className="matching__filter-menu">
      <button onClick={handleClick}>My Matchings</button>
      <div className="_section">
        <div className="_title"></div>
        <div className="_more">
          <Accordion>
            <AccordionSummary>
              <Typography>Sector</Typography>
            </AccordionSummary>
            
            <AccordionDetails>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {filterOptions.map((option: any, i: any) => (
                  <ListItemButton disableGutters key={`listItemButton-${i}`}>

                    <button id={option.sector} key={i} onClick={handleOnChangeSector} >{option.sector}</button>

                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Typography>Country</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >

                {fieldsOptions.map((option: any, i: any) => (
                  <ListItemButton disableGutters key={`list2-${i}-2`}>

                    <button id={option.fieldsOfKnowledge} key={i} onClick={handleOnChangeField} >{option.fieldsOfKnowledge}</button>

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
