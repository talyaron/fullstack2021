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
  const { checked, setChecked, filterOptions, setFilterOptions, setUsersList } = props;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-filter");
      const { result } = data;
      setFilterOptions(result);
      console.log(result);
    })();
  }, []);

  async function handleOnChange(ev: any) {
    setChecked(!checked);
    
    
    const checkedField = ev.target.name;
    console.log(checkedField);
    const { data } = await axios.post(`/api/users/get-checked`, { checkedField,checked })
    const { allChecked } = data;
    setUsersList(allChecked)
    console.log(checked);


    console.log(allChecked);


    if(checked===false){setTimeout(setChecked(!checked), 100);
      }
    




      
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
                  <ListItemButton disableGutters>
                    {/* <Checkbox onChange={handleOnChange} checked={checked} /> */}
                    <input type="checkbox" name={option.sector} onClick={handleOnChange} />{option.sector}
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
