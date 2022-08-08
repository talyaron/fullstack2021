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
  

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-sector");
      const { result } = data;
      setFilterOptions(result);
      console.log(result);
    })();
  }, []);



  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-field");
      const { result } = data;
      setFieldsOptions(result);

    })();
  }, []);
  
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

  

  async function handleOnChangeSector(ev: any) {
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-sector`, { checkedField, })
    const { allChecked } = data;
    setUsersList(allChecked)

  }

  async function handleOnChangeField(ev: any) {
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-field`, { checkedField, })
    const { allChecked } = data;
    setUsersList(allChecked)

  }










  return (
    <div className="matching__filter-menu">
      <button onClick={handleClick}>My Matchings</button>

      <div className="more">
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

                  <button className="filter-btn" id={option.sector} key={i} onClick={handleOnChangeSector} >{option.sector}</button>

                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography>Fields Of Knowledge</Typography>
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

                  <button className="filter-btn" id={option.fieldsOfKnowledge} key={i} onClick={handleOnChangeField} >{option.fieldsOfKnowledge}</button>

                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>

  );
};

export default FilterMenu;
