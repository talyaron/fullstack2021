import { useState, useEffect } from "react";
import {
  List,
  ListItemButton,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Checkbox
} from "@mui/material";
import axios from "axios";

const FilterMenu = (props: any) => {
  const {
    filterOptions,
    setFilterOptions,
    setUsersList,
    setCurrentUser,
    currentUser,
  } = props;
  const [fieldsOptions, setFieldsOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-sector");
      const { result } = data;
      setFilterOptions(result);
      console.log(result);
    })();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      const { data } = await axios.get("/api/users/get-user");
      const { user } = data;
      setCurrentUser(user);
      handleGetUsers(currentUser);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetUsers(currentUser: any) {
    try {
      const { data } = await axios.post("/api/users/get-users", {
        currentUser,
      });
      const { filterUsers } = data;
      console.log(filterUsers);

      setUsersList(filterUsers);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleOnChangeSector(ev: any) {
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-sector`, {
      checkedField,
    });
    const { allChecked } = data;
    setUsersList(allChecked);
  }

  async function handleOnChangeField(ev: any) {
    const checkedField = ev.target.id;
    const { data } = await axios.post(`/api/users/get-checked-field`, {
      checkedField,
    });
    const { allChecked } = data;
    setUsersList(allChecked);
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

            <AccordionDetails>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {filterOptions.map((option: any, i: any) => (
                  <ListItemButton disableGutters key={`listItemButton-${i}`}>
                    <Checkbox />{" "}
                    <button
                      id={option.sector}
                      key={i}
                      onClick={handleOnChangeSector}
                    >
                      {option.sector}
                    </button>
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
                    <Checkbox />
                    <button
                      id={option.fieldsOfKnowledge}
                      key={i}
                      onClick={handleOnChangeField}
                    >
                      {option.fieldsOfKnowledge}
                    </button>
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <button className="matching__filter-menu_clear" onClick={handleClick}>clear selection</button>
    </div>
  );
};

export default FilterMenu;
