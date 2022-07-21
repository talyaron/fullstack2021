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
  const { checked, setChecked } = props;

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];
  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-filter");
      const { allFiltered } = data;
      setChecked(allFiltered);
      
    })();
  }, []);
  try {
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
                  }}>
                  {checked.map((check: any,i:any) => (
                    <ListItemButton disableGutters>
                      <Checkbox />
                      <p key={i}>{check.sector}</p>

                      <ListItemText primary={check.sector} />
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default FilterMenu;
